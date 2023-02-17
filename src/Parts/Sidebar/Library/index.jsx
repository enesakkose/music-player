import React from 'react'
import Icon from '@/components/UI/Icon'
import NavLink from '@/components/UI/Button/NavLink'
import { unauthModal } from '@/utils/helpers'
import { useSelector } from 'react-redux'
import styles from '@/Parts/Sidebar/Library/Library.module.scss'

function Library() {
  const { user } = useSelector(state => state.auth)

  return (
    <nav className={styles.library}>
      <h5 className={styles.title}>YOUR LIBRARY</h5>
      <ul className={styles.links}>
        <NavLink
          className={styles.favsLink}
          activeClassName={styles.activeFavsLink}
          href='/collection/tracks'
          onClick={(e) => user ? undefined : unauthModal(e)}
        >
          <Icon name='Favorite' size={24} />
          Favorites
        </NavLink>
        <NavLink
          href='/songs'
          className={styles.songsLink}
          activeClassName={styles.activeSongsLink}
        >
          <Icon name='Music' size={24} />
          Songs
        </NavLink>
      </ul>
    </nav>
  )
}

export default Library