import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { WithUser } from '../HOCs/WithUser'
import { useMutation } from 'react-apollo-hooks'
import { LogoutData } from '../generated/LogoutData'
import { Logout, GetCurrentUser } from '../graphql/userQueries'

const Header: React.SFC<RouteComponentProps<{}>> = () => {
  const logout = useMutation<LogoutData>(Logout, {
    refetchQueries: [
      {
        query: GetCurrentUser
      }
    ]
  })
  return (
    <div>
      <WithUser>
        {data =>
          !data.me ? (
            <nav>
              <Link to="/login">Log In</Link>
              <Link to="/signup">Sign Up</Link>
            </nav>
          ) : (
            <nav>
              <Link to="/profile">Profile</Link>
              <Link
                to="/logout"
                onClick={e => {
                  e.preventDefault()
                  logout()
                }}
              >
                Logout
              </Link>
            </nav>
          )
        }
      </WithUser>
    </div>
  )
}

export default withRouter(Header)
