import React from 'react'
import DefaultAvatar from '@/icons/Avatar.svg'
import PlaylistHeader from '@/components/PlaylistHeader'
import ProfileHeaderBtns from '@/Pages/Profile/ProfileHeader/ProfileHeaderBtns'
import { modal } from '@/utils'
import '@/Pages/Profile/ProfileHeader/ProfileHeader.scss'

function ProfileHeader({ profile, validProfile }) {
  return (
    <PlaylistHeader 
      className='profileHeader' 
      infoTitle='PROFILE' 
      infoHeader={profile.displayName}
      img={profile.photoURL === null || profile.photoURL === '' ? DefaultAvatar : profile.photoURL}
      onClick={validProfile ? () => modal('UserInfoModal') : undefined}
      validProfile={validProfile}
    >
      <ProfileHeaderBtns profile={profile} validProfile={validProfile}/>
    </PlaylistHeader>
  )
}

export default ProfileHeader