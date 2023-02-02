import React from 'react'
import Icon from '@/components/Icon'
import NavLink from '@/components/NavLink'
import Range from '@/components/Footer/MusicTool/Range'
import { useSelector } from 'react-redux'
import styles from '@/components/Footer/MusicTool/MusicTool.module.scss'

function MusicTool() {
  const { isActive } = useSelector(state => state.player)

  return (
    <div className={styles.musicTool}>
      {isActive && 
      <NavLink 
        href='/lyrics' 
        className={styles.lyricsBtn} 
        activeClassName={styles.active}
      >
        <Icon name='Microphone' size={22}/>
      </NavLink>}
      <Range/>
    </div>
  )
}

export default MusicTool