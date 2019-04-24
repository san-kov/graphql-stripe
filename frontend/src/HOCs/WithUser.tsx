import { useQuery } from 'react-apollo-hooks'
import { GetCurrentUserData } from '../generated/GetCurrentUserData'
import { GetCurrentUser } from '../graphql/userQueries'
import React from 'react'

interface IWithUser<T> {
  children(props: T): JSX.Element
}

export const WithUser: React.SFC<IWithUser<GetCurrentUserData>> = ({
  children
}) => {
  const { error, data, loading } = useQuery<GetCurrentUserData>(GetCurrentUser)

  if (loading) return null
  if (!data || error) return null

  return <div>{children(data)}</div>
}
