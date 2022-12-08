import React from 'react'
import ProfileFollowers from '@/Pages/Profile/ProfileFollowers'
import { useGetProfile } from '@/hooks/useGetProfile'
import { useParams } from 'react-router-dom'
import '@/Pages/Profile/ProfileLayout.scss'

function Following() {
  const { id } = useParams()
  const profile = useGetProfile(id)

  return (
    <>
    {profile?.following.length> 0 &&
    <ProfileFollowers title='Followings' users={profile?.following}/>}
    </>
  )
}

export default Following