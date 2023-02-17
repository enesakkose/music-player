import React, { useState } from 'react'
import Icon from '@/components/UI/Icon'
import Menu from '@/components/MobilePlayer/Player/Menu'
import Button from '@/components/UI/Button'
import styles from '@/components/MobilePlayer/Player/Header/Header.module.scss'

function Header({ setExpand }) {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className={styles.header}>
      <Button onClick={() => setExpand(prevState => !prevState)}>
        <Icon name='down' size={40}/>
      </Button>
      <Button onClick={() => setOpenMenu(true)}>
        <Icon name='threedots' size={32}/>
      </Button>
      {openMenu && <Menu setOpenMenu={setOpenMenu} setExpand={setExpand} />}
    </header>
  )
}

export default Header