import React from 'react'
import Favorites from '@/Pages/Profile/ProfileMain/Favorites'
import PublishPlaylists from '@/Pages/Profile/ProfileMain/PublishPlaylists'
import PageWrapper from '@/components/Wrappers/PageWrapper'
import '@/Pages/Profile/ProfileMain/ProfileMain.scss'

function ProfileMain({ profile, publishPlaylists}) {
  const favLength = profile?.favorites?.length > 0
  const publishLength = publishPlaylists.length > 0
  return (
    <PageWrapper className='profileMain'>
      {favLength && <Favorites profile={profile}/>}
      {publishLength && <PublishPlaylists publishPlaylists={publishPlaylists}/>}
    </PageWrapper>
  )
}

export default ProfileMain