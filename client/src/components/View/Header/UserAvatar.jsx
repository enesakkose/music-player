import React from 'react'
import Avatar from '@/components/Avatar'
import { DropdownMenu, DropdownMenuItem } from '@/components/DropdownMenu'
import { useSelector } from 'react-redux'
import { modal } from '@/utils'
import { handleLogout } from '@/firebase/auth'
import { navigateAuth } from '@/utils'
import '@/components/View/Header/UserAvatar.scss'

function UserAvatar() {
  const { profile: { photoURL } } = useSelector(state => state.profiles)
  
  const openUserInfo = () => {
    modal('UserInfoModal')
  }

  const openPasswordChangeModal = () => {
    modal('PasswordChangeModal')
  }

  const logout = () => {
    window.location.reload()
    handleLogout()
    //todo buna tekrar bakılacak
  }
  
  return (
      <DropdownMenu 
        btn={<Avatar src={photoURL} size='28px'/>} 
        className="userAvatarMenu"
        btnClassName='avatarBtn'
      >
        <DropdownMenuItem text='Account' onClick={openUserInfo}/>
        <DropdownMenuItem text='Password Change' onClick={openPasswordChangeModal}/>
        <DropdownMenuItem text='Logout' onClick={logout}/>
      </DropdownMenu>
  )
}

export default UserAvatar