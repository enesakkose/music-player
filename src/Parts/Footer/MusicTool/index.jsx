import React from 'react'
import Icon from '@/components/UI/Icon'
import NavLink from '@/components/UI/Button/NavLink'
import Range from '@/Parts/Footer/MusicTool/Range'
import { useSelector } from 'react-redux'
import styles from '@/Parts/Footer/MusicTool/MusicTool.module.scss'

function MusicTool() {
  const { isActive } = useSelector(state => state.player)

  return (
    <div className={styles.musicTool}>
      {isActive &&
        <NavLink href='/lyrics' activeClassName={styles.active}>
          <Icon name='Microphone' size={22} />
        </NavLink>}
      <Range />
    </div>
  )
}

export default MusicTool