import React from 'react'
import clsx from 'clsx'
import Button from '@/components/UI/Button'
import CloseBtn from '@/components/IconButtons/CloseBtn'
import { modal } from '@/utils/helpers'
import { handleLogout } from '@/firebase/auth'
import styles from '@/Pages/Home/MobileHeader/Menu/Menu.module.scss'

function Menu({ openMenu, setOpenMenu, profile }) {
  const openMenuHandle = () => {
    setOpenMenu(false)
  }

  return (
    <div className={clsx(styles.mobileMenu, openMenu ? styles.openMenu : '')}>
      <CloseBtn className={styles.closeBtn} onClick={openMenuHandle} size={30} />
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