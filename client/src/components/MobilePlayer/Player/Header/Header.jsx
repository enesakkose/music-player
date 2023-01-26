import React, { useState } from 'react'
import Icon from '@/components/Icon'
import Menu from '@/components/MobilePlayer/Player/Menu'
import styles from '@/components/MobilePlayer/Player/Header/Header.module.scss'

function Header({setExpand}) {
  const [ openMenu, setOpenMenu ] = useState(false)

  return (
    <div className={styles.header}>
      <button className={styles.closeBtn} onClick={() => setExpand(prevState => !prevState)}>
        <Icon name='down' size={40}/>
      </button>
      <button onClick={() => setOpenMenu(true)} className={styles.openMenu}>
        <Icon name='threedots' size={32}/>
      </button>
      {openMenu && <Menu setOpenMenu={setOpenMenu} setExpand={setExpand}/>}
    </div>
  )
}

export default Header