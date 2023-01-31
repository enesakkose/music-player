import React from 'react'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import { Link } from 'react-router-dom'
import { modal } from '@/utils'
import { handleLogout } from '@/firebase/auth'
import '@/Pages/Home/MobileHeader/Menu.scss'

function Menu({ openMenu, setOpenMenu, profile }) {
  return (
    <div className={clsx('mobileMenu', openMenu ? 'openMenu' : '')}>
      <button
        className='mobileMenuCloseBtn'
        onClick={() => setOpenMenu(false)}
      >
        <Icon name='close' size={30}/>
      </button>
      <div className="mobileMenuList">
        <Button href={`/profile/${profile.uid}`}>
          Profile
        </Button>
        <button onClick={() => modal('UserInfoModal')}>
          Edit Profile
        </button>
        <button onClick={() => modal('PasswordChangeModal')}>
          Password Change
        </button>
        <button onClick={() => handleLogout()}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Menu