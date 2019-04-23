import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-apollo-hooks'
import { GetCurrentUserData } from '../generated/GetCurrentUserData'
import { GetCurrentUser } from '../graphql/userQueries'

const Header: React.SFC<RouteComponentProps<{}>> = props => {
  const { error, data, loading } = useQuery<GetCurrentUserData>(GetCurrentUser)

  if (loading) return <p>loading</p>
  if (!data || error) return null

  return (
    <div>
      {!data.me ? (
        <nav>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
      ) : (
        <Link to="/profile">Profile</Link>
      )}
      <h1>React Stripe</h1>
    </div>
  )
}

export default withRouter(Header)
