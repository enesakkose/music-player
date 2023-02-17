import React from 'react'
import Icon from '@/components/UI/Icon'
import styles from '@/components/TrackList/Header/TrackListHeader.module.scss'

function Header({ children }) {
  return (
    <div className={styles.trackListHeader}>
      <div className={styles.title}>
        <Icon name='Hashtag' size={20}/>
        <span>TITLE</span>
      </div>
      {children}
      <Icon name='add' size={22}/>
    </div>
  )
}

export default Header