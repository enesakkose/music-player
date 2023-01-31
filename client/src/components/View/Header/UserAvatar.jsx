import React from 'react'
import Avatar from '@/components/Avatar'
import DropdownMenu from '@/components/DropdownMenu'
import DropdownMenuItem from '@/components/DropdownMenu/DropdownMenuItem'
import { useSelector } from 'react-redux'
import { modal } from '@/utils'
import { handleLogout } from '@/firebase/auth'
import { useNavigate } from 'react-router-dom'
import '@/components/View/Header/UserAvatar.scss'

function UserAvatar() {
  const navigate = useNavigate()
  const { profile: { photoURL, uid } } = useSelector(state => state.profiles)

  return (
    <DropdownMenu
      openBtn={<Avatar src={photoURL} size='28px' />}
      className="userAvatarMenu"
      openBtnClassName='avatarBtn'
    >
      <DropdownMenuItem text='Account' onClick={() => modal('UserInfoModal')} />
      <DropdownMenuItem text='Profile' onClick={() => navigate(`/profile/${uid}`)} />
      <DropdownMenuItem text='Password Change' onClick={() => modal('PasswordChangeModal')} />
      <DropdownMenuItem text='Logout' onClick={() => handleLogout()} />
    </DropdownMenu>
  )
}

export default UserAvatar