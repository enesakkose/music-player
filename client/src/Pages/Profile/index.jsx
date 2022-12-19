import React from 'react'
import Loading from '@/components/Loading'
import ProfileHeader from '@/Pages/Profile/ProfileHeader'
import ProfileMain from '@/Pages/Profile/ProfileMain'
import { useSelector } from 'react-redux'
import { useGetProfile } from '@/hooks/useGetProfile'
import { useParams } from 'react-router-dom'
import '@/Pages/Profile/Profile.scss'

function Profile() {
  const { id } = useParams()
  const { profile: userProfile } = useSelector(state => state.profiles)
  const profile = useGetProfile(id)
  const validProfile = userProfile?.uid === profile?.uid

  if(profile === null) return <Loading/>

  return (
    <div className='profile'>
      <ProfileHeader profile={profile} validProfile={validProfile}/>
      <ProfileMain profile={profile}/>
    </div>
  )
}

export default Profile