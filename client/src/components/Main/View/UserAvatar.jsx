import React, { useState } from 'react'
import Icon from '@/components/Icon'
import DropdownMenu from '@/components/DropDownMenu'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from '@/store/modal'
import '@/components/Main/View/UserAvatar.scss'


function UserAvatar() {
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

  return (
    <div ref={domNode} className="userAvatar">
      <button 
        onClick={() => setOpenAvatarMenu(!openAvatarMenu)} className='avatar__btn'
      >
        <div className="avatar__btn__img">
          <img src={user.photoURL} alt="profile"/>
          {!user.photoURL &&<Icon name='Avatar' size={28} style={{ color: 'gray'}}/>}
        </div>
        <span>{user.displayName || 'user'}</span>
        <Icon name='Down' className={openAvatarMenu ? 'rotate' : ''}/>
      </button>

      {openAvatarMenu && 
        <DropdownMenu className="userAvatar__widgetMenu">
          <ul>
            <li>
              <button onClick={openUserInfo}>
                Hesap
              </button>
            </li>
            <li>
              <button>Oturumu Kapat</button>
            </li>
          </ul>
        </DropdownMenu>
      }
    </div>
  )
}

export default UserAvatar