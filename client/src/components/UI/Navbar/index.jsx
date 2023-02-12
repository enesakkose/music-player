import React from 'react'
import MobilePlayer from '@/components/MobilePlayer'
import Navbar from '@/components/Sidebar/Navbar'
import { useSelector } from 'react-redux'
import styles from '@/components/UI/Navbar/Navbar.module.scss'

function MobileNavbar() {
  const { current } = useSelector(state => state.player)

  return (
    <nav className={styles.navbar}>
      {current.key && <MobilePlayer/>}
      <Navbar/>
    </nav>
  )
}

export default MobileNavbar