import React, { useState } from 'react'
import MusicInfo from '@/components/Footer/MusicInfo'
import Player from '@/components/Player'
import MusicTool from '@/components/Footer/MusicTool'
import styles from '@/components/Footer/Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <MusicInfo/>
      <Player/>
      <MusicTool/>
    </footer>
  )
}

export default Footer