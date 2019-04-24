import React from 'react'
import { Formik, FormikActions, Form, Field } from 'formik'
import { useMutation } from 'react-apollo-hooks'
import { LogInMutation, GetCurrentUser } from '../graphql/userQueries'
import { object, string } from 'yup'
import { RouteComponentProps } from 'react-router'
import { formatErrors } from '../formatErrors'
import {
  LogInMutationData,
  LogInMutationDataVariables
} from '../generated/LogInMutationData'
import { WithAuth } from '../HOCs/WithAuth'

interface ILoginFormValues {
  email: string
  password: string
}

const loginSchema = object().shape({
  email: string()
    .email()
    .required(),
  password: string()
    .min(5)
    .max(100)
    .required()
})

const LogIn: React.SFC<RouteComponentProps<{}>> = ({ history }) => {
  const login = useMutation<LogInMutationData, LogInMutationDataVariables>(
    LogInMutation,
    { refetchQueries: [{ query: GetCurrentUser }] }
  )
  return (
    <WithAuth requireAuth={false}>
      <h2>Log In</h2>
      <Formik
        validationSchema={loginSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={async (
          { email, password }: ILoginFormValues,
          { setSubmitting, setFieldError }: FormikActions<ILoginFormValues>
        ) => {
          setSubmitting(true)
          try {
            await login({ variables: { email, password } })
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

export default LogIn
