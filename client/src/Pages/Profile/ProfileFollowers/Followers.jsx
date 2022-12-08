import React from 'react'
import ProfileFollowers from '@/Pages/Profile/ProfileFollowers'
import { useGetProfile } from '@/hooks/useGetProfile'
import { useParams } from 'react-router-dom'

function Followers() {
  const { id } = useParams()
  const profile = useGetProfile(id)

  return (
    <>
      {profile?.follower.length > 0 &&
      <ProfileFollowers title='Followers' users={profile?.follower}/>}
    </>
  )
}

export default Followers