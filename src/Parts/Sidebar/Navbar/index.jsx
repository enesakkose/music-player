import React from 'react'
import Icon from '@/components/UI/Icon'
import NavLink from '@/components/UI/Button/NavLink'
import { unauthModal } from '@/utils/helpers'
import { useSelector } from 'react-redux'
import styles from '@/Parts/Sidebar/Navbar/Navbar.module.scss'

function Navbar({ size = 30 }) {
  const { user } = useSelector(state => state.auth)

  return (
    <nav className={styles.navbar}>
      <NavLink href='/' activeClassName={styles.active}>
        <Icon name='Home' size={size} />
        <span>home</span>
      </NavLink>
      <NavLink href='/search' activeClassName={styles.active}>
        <Icon name='Search' size={size} />
        <span>search</span>
      </NavLink>
      <NavLink
        href='/collection/playlists'
        activeClassName={styles.active}
        onClick={(e) => user ? undefined : unauthModal(e)}
      >
        <Icon name='Book' size={size} />
        <span>library</span>
      </NavLink>
    </nav>
  )
}

export default Navbar