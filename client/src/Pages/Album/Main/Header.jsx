import React from 'react'
import ActionBtns from '@/components/ActionBtns'
import styles from '@/Pages/Album/Main/Header.module.scss'

function Header({ songs, album, size }) {
  return (
    <div className={styles.header}>
    <>
      {size && <div className={styles.mobileInfo}>
        <h1 className={styles.title}>
          {album?.title}
        </h1> 
        <span className={styles.subtitle}>
          {album?.subtitle}
        </span>  
        <span className={styles.listLength}>
          • {songs.length} Songs
        </span>
      </div>}
      <ActionBtns findSongs={songs} className={styles.actionBtns}/>
    </>
  </div>
  )
}

export default Header