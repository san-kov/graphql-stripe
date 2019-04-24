import React from 'react'
import { WithAuth } from '../HOCs/WithAuth'

const Profile: React.SFC<{}> = () => {
  return (
    <WithAuth requireAuth={true}>
      <h1>Profile Page</h1>
    </WithAuth>
  )
}

export default Profile
