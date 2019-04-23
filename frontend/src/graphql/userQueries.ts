import gql from 'graphql-tag'

export const SignUpMutation = gql`
  mutation SignUpMutationData($email: String!, $password: String!) {
    register(data: { email: $email, password: $password }) {
      id
    }
  }
`
