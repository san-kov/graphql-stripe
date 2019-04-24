import { useQuery } from 'react-apollo-hooks'
import { GetCurrentUserData } from '../generated/GetCurrentUserData'
import { GetCurrentUser } from '../graphql/userQueries'
import React, { ReactNode } from 'react'
import { Redirect } from 'react-router'

interface IWithAuth {
  requireAuth: boolean
}

export const WithAuth: React.SFC<ReactNode & IWithAuth> = ({
  children,
  requireAuth
}) => {
  const { error, data, loading } = useQuery<GetCurrentUserData>(GetCurrentUser)

  if (loading) return null
  if (!data || error) return null

  if (requireAuth) {
    if (!data.me) return <Redirect to="/login" />
    return <>{children}</>
  } else {
    if (data.me) return <Redirect to="/profile" />
    return <>{children}</>
  }
}
