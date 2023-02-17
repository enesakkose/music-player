import React from 'react'
import ProfileHeader from '@/Pages/Profile/ProfileHeader'
import ProfileMain from '@/Pages/Profile/ProfileMain'
import PlaylistWrapper from '@/components/Wrappers/PlaylistWrapper'
import { useGetPublishPlaylists } from '@/utils/hooks/useGetPublishPlaylists'
import { useSelector } from 'react-redux'
import { useGetProfile } from '@/utils/hooks/useGetProfile'
import { useParams } from 'react-router-dom'

function Profile() {
  const { id } = useParams()
  const { profile: userProfile } = useSelector(state => state.profiles)
  const profile = useGetProfile(id)
  const publishPlaylists = useGetPublishPlaylists(id)
  const validProfile = userProfile?.uid === profile?.uid

  if (profile === null || publishPlaylists === null) return

  return (
    <PlaylistWrapper className='profile'>
      <ProfileHeader profile={profile} validProfile={validProfile}/>
      <ProfileMain profile={profile} publishPlaylists={publishPlaylists}/>
    </PlaylistWrapper>
  )
}

export default Profile