import React from 'react'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import { modal } from '@/utils'
import { handleLogout } from '@/firebase/auth'
import styles from '@/Pages/Home/MobileHeader/Menu/Menu.module.scss'

function Menu({ openMenu, setOpenMenu, profile }) {
  return (
    <div className={clsx(styles.mobileMenu, openMenu ? styles.openMenu : '')}>
      <Button
        className={styles.closeBtn}
        onClick={() => setOpenMenu(false)}
      >
        <Icon name='close' size={30}/>
      </Button>
      <div className={styles.menuList}>
        <Button href={`/profile/${profile.uid}`}>
          Profile
        </Button>
        <Button onClick={() => modal('UserInfoModal')}>
          Edit Profile
        </Button>
        <Button onClick={() => modal('PasswordChangeModal')}>
          Password Change
        </Button>
        <Button onClick={() => handleLogout()}>
          Logout
        </Button>
      </div>
    </div>
  )
}

export default Menu