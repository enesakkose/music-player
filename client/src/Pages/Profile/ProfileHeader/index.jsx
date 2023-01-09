import React from 'react'
import DefaultAvatar from '@/icons/Avatar.svg'
import Header from '@/components/Playlist/Header'
import ProfileHeaderBtns from '@/Pages/Profile/ProfileHeader/ProfileHeaderBtns'
import { modal } from '@/utils'
import styles from '@/Pages/Profile/ProfileHeader/Header.module.scss'

function ProfileHeader({ profile, validProfile }) {
  return (
    <Header
      className={styles.profileHeader}
      type='PROFILE'
      title={profile.displayName}
      img={profile.photoURL === null || profile.photoURL === '' ? DefaultAvatar : profile.photoURL}
      onClick={validProfile ? () => modal('UserInfoModal') : undefined}
      validProfile={validProfile}
    >
      <ProfileHeaderBtns profile={profile} validProfile={validProfile}/>
    </Header>
  )
}

export default ProfileHeader