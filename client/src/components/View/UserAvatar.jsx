import React, { useState } from 'react'
import Icon from '@/components/Icon'
import Avatar from '@/components/Avatar'
import DropdownMenu from '@/components/DropDownMenu'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { modal } from '@/utils'
import { handleLogout } from '@/firebase/auth'
import '@/components/View/UserAvatar.scss'


function UserAvatar() {
  const navigate= useNavigate()
  const { user } = useSelector(state => state.auth)
  const [ openAvatarMenu, setOpenAvatarMenu] = useState(false)
  
  const domNode = useClickOutside(() => { 
    setOpenAvatarMenu(false)
  })

  const openUserInfo = () => {
    modal('UserInfoModal', user)
    setOpenAvatarMenu(false)
  }

  const openPasswordChangeModal = () => {
    modal('PasswordChangeModal')
    setOpenAvatarMenu(false)
  }
  
  const logout = async() => {
    await new Promise(resolve => setTimeout(resolve, 4000));
    await  handleLogout()
    navigate('/auth', { replace: true })
  }

  return (
    <div ref={domNode} className="userAvatar">
      <button 
        onClick={() => setOpenAvatarMenu(!openAvatarMenu)} className='avatar__btn'
      >
        <Avatar src={user.photoURL} size='28px'/>
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