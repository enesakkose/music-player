import React, { useState } from 'react'
import Avatar from '@/components/Avatar'
import DropdownMenu from '@/components/DropDownMenu'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useSelector } from 'react-redux'
import { modal } from '@/utils'
import { handleLogout } from '@/firebase/auth'
import { navigateAuth } from '@/utils'
import '@/components/View/UserAvatar.scss'

function UserAvatar() {
  const { profile: { photoURL } } = useSelector(state => state.profiles)
  const [ openAvatarMenu, setOpenAvatarMenu] = useState(false)
  
  const domNode = useClickOutside(() => { 
    setOpenAvatarMenu(false)
  })

  const openUserInfo = () => {
    modal('UserInfoModal')
    setOpenAvatarMenu(false)
  }

  const openPasswordChangeModal = () => {
    modal('PasswordChangeModal')
    setOpenAvatarMenu(false)
  }

  const logout = () => {
    window.location.reload()
    handleLogout()
    //todo buna tekrar bakılacak
  }
  
  return (
    <div ref={domNode} className="userAvatar">
      <button 
        className='avatar__btn'
        onClick={() => setOpenAvatarMenu(!openAvatarMenu)} 
      >
        <Avatar src={photoURL} size='28px'/>
      </button>

      {openAvatarMenu && 
        <DropdownMenu className="userAvatar__widgetMenu">
          <ul>
            <li>
              <button onClick={openUserInfo}>
                Account
              </button>
            </li>
            <li>
              <button onClick={openPasswordChangeModal}>
                Password Change
              </button>
            </li>
            <li>
              <button onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </DropdownMenu>
      }
    </div>
  )
}

export default UserAvatar