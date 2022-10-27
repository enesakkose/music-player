import React, { useState } from 'react'
import Icon from '@/components/Icon'
import DropdownMenu from '@/components/DropDownMenu'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { openModal } from '@/store/modal'
import { handleLogout } from '@/firebase/auth'
import '@/components/Main/View/UserAvatar.scss'


function UserAvatar() {
  const navigate= useNavigate()
  const dispatch = useDispatch()
  const [ openAvatarMenu, setOpenAvatarMenu] = useState(false)
  const { user } = useSelector(state => state.auth)
  
  const domNode = useClickOutside(() => { 
    setOpenAvatarMenu(false)
  })

  const openUserInfo = () => {
    dispatch(openModal({
      name: 'UserInfoModal',
      data: user
    }))
    setOpenAvatarMenu(false)
  }

  const openPasswordChangeModal = () => {
    dispatch(openModal({ 
      name: 'PasswordChangeModal'
    }))
    setOpenAvatarMenu(false)
  }
  
  const logout = async() => {
    await new Promise(resolve => setTimeout(resolve, 4000));
    await  handleLogout()
    navigate('/', { replace: true })
  }

  return (
    <div ref={domNode} className="userAvatar">
      <button 
        onClick={() => setOpenAvatarMenu(!openAvatarMenu)} className='avatar__btn'
      >
        <div className="avatar__btn__img">
          {user.photoURL !== null && <img src={user.photoURL} alt="profile"/>}
          {user.photoURL === null && <Icon name='Avatar' size={28} style={{ color: 'gray'}}/>}
        </div>
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