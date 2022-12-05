import React from 'react'
import Loading from '@/components/Loading'
import ProfileHeader from '@/Pages/Profile/ProfileHeader'
import { useSelector } from 'react-redux'
import { useGetProfile } from '@/hooks/useGetProfile'
import { useParams } from 'react-router-dom'
import '@/Pages/Profile/Profile.scss'

function Profile() {
  const { id } = useParams()
  const { user } = useSelector(state => state.auth)
  const profile = useGetProfile(id)
  const validProfile = user?.uid === profile?.uid
  
  if(profile === null) return <Loading/>

  return (
    <div className='profile'>
      <ProfileHeader 
        profile={profile} 
        validProfile={validProfile} 
        user={user}
      />
    </div>
  )
}

export default Profile