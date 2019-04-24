import React from 'react'
import { Formik, FormikActions, Form, Field } from 'formik'
import { useMutation } from 'react-apollo-hooks'
import {
  SignUpMutationData,
  SignUpMutationDataVariables
} from '../generated/SignUpMutationData'
import { SignUpMutation } from '../graphql/userQueries'
import { object, string } from 'yup'
import { RouteComponentProps } from 'react-router'
import { formatErrors } from '../formatErrors'
import { WithAuth } from '../HOCs/WithAuth'

interface ISignupFormValues {
  email: string
  password: string
}

const signupSchema = object().shape({
  email: string()
    .email()
    .required(),
  password: string()
    .min(5)
    .max(100)
    .required()
})

const SignUp: React.SFC<RouteComponentProps<{}>> = ({ history }) => {
  const signUp = useMutation<SignUpMutationData, SignUpMutationDataVariables>(
    SignUpMutation
  )
  return (
    <WithAuth requireAuth={false}>
      <h2>Sign Up</h2>
      <Formik
        validationSchema={signupSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={async (
          { email, password }: ISignupFormValues,
          { setSubmitting, setFieldError }: FormikActions<ISignupFormValues>
        ) => {
          setSubmitting(true)
          try {
            await signUp({ variables: { email, password } })
          } catch (error) {
            formatErrors(error, setFieldError)
          } finally {
            setSubmitting(false)
          }
        }}
        render={({ isSubmitting, errors }) => (
          <Form>
            <Field type="text" name="email" disabled={isSubmitting} />
            <br />
            <br />
            <div>{errors.email}</div>
            <Field type="password" name="password" disabled={isSubmitting} />
            <br />
            <br />
            <div>{errors.password}</div>
            <button type="submit" disabled={isSubmitting}>
              Sign Up
            </button>
          </Form>
        )}
      />
    </WithAuth>
  )
}

export default SignUp
