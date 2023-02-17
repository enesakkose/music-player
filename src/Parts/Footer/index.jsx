import React from 'react'
import MusicInfo from '@/Parts/Footer/MusicInfo'
import Player from '@/components/Player'
import MusicTool from '@/Parts/Footer/MusicTool'
import { useSelector } from 'react-redux'
import styles from '@/Parts/Footer/Footer.module.scss'

function Footer() {
  const { current } = useSelector(state => state.player)

  return (
    <footer className={styles.footer}>
      {current.key && <MusicInfo/>}
      <Player/>
      <MusicTool/>
    </footer>
  )
}

export default Footer