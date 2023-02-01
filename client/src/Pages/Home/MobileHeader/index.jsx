import React, { useState } from 'react'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import Menu from '@/Pages/Home/MobileHeader/Menu/Menu'
import styles from '@/Pages/Home/MobileHeader/MobileHeader.module.scss'

function MobileHeader({profile}) {
  const [ openMenu, setOpenMenu ] = useState(false)

  return (
    <>
    <header className={styles.mobileHeader}>
      <Icon name='Logo' size={30}/>
      <Button onClick={() => setOpenMenu(true)}>
        <Icon name='Double' size={30}/>
      </Button> 
    </header>
    <Menu setOpenMenu={setOpenMenu} openMenu={openMenu} profile={profile}/>
    </>
  )
}

export default MobileHeader