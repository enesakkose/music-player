import React, { useState } from 'react'
import Icon from '@/components/Icon'
import Menu from '@/components/MobilePlayer/Player/Menu'
import Button from '@/components/Button'
import styles from '@/components/MobilePlayer/Player/Header/Header.module.scss'

function Header({setExpand}) {
  const [ openMenu, setOpenMenu ] = useState(false)

  return (
    <div className={styles.header}>
      <Button className={styles.closeBtn} onClick={() => setExpand(prevState => !prevState)}>
        <Icon name='down' size={40}/>
      </Button>
      <Button onClick={() => setOpenMenu(true)} className={styles.openMenu}>
        <Icon name='threedots' size={32}/>
      </Button>
      {openMenu && <Menu setOpenMenu={setOpenMenu} setExpand={setExpand}/>}
    </div>
  )
}

export default Header