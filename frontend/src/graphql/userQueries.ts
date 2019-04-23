import gql from 'graphql-tag'

export const SignUpMutation = gql`
  mutation SignUpMutationData($email: String!, $password: String!) {
    register(data: { email: $email, password: $password }) {
      id
    }
  }
`

export const LogInMutation = gql`
  mutation LogInMutationData($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      id
    }
  }
`

export const GetCurrentUser = gql`
  query GetCurrentUserData {
    me {
      id
    }
  }
`
