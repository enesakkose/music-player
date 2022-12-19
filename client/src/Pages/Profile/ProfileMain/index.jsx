import React from 'react'
import Favorites from '@/Pages/Profile/ProfileMain/Favorites'
import PageWrapper from '@/components/Wrappers/PageWrapper'
import '@/Pages/Profile/ProfileMain/ProfileMain.scss'

function ProfileMain({profile}) {
  const favLength = profile?.favorites?.length > 0

  return (
    <PageWrapper className='profileMain'>
      {favLength && <Favorites profile={profile}/>}
      
    </PageWrapper>
  )
}

export default ProfileMain