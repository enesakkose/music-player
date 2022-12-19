import React from 'react'
import Favorites from '@/Pages/Profile/ProfileMain/Favorites'
import '@/Pages/Profile/ProfileMain/ProfileMain.scss'

function ProfileMain({profile}) {
  const favLength = profile?.favorites?.length > 0

  return (
    <div className='profileMain'>
      {favLength && <Favorites profile={profile}/>}
      
    </div>
  )
}

export default ProfileMain