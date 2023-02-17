import React from 'react'
import Avatar from '@/components/Avatar'
import DropdownMenu from '@/components/UI/DropdownMenu'
import DropdownMenuItem from '@/components/UI/DropdownMenu/DropdownMenuItem'
import { useSelector } from 'react-redux'
import { modal } from '@/utils/helpers'
import { handleLogout } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import styles from '@/Parts/View/Header/UserAvatar/UserAvatar.module.scss'

function UserAvatar() {
  const navigate = useNavigate()
  const { profile: { photoURL, uid } } = useSelector(state => state.profiles)

  return (
    <DropdownMenu
      openBtn={<Avatar src={photoURL} size='28px' />}
      className={styles.menu}
      openBtnClassName={styles.avatarBtn}
    >
      <DropdownMenuItem text='Account' onClick={() => modal('UserInfoModal')} />
      <DropdownMenuItem text='Profile' onClick={() => navigate(`/profile/${uid}`)} />
      <DropdownMenuItem text='Password Change' onClick={() => modal('PasswordChangeModal')} />
      <DropdownMenuItem text='Logout' onClick={() => handleLogout()} />
    </DropdownMenu>
  )
}

export default UserAvatar