import React, { useState } from 'react'
import MusicInfo from '@/components/Footer/MusicInfo'
import Player from '@/components/Player'
import MusicTool from '@/components/Footer/MusicTool'
import '@/components/Footer/Footer.scss'

function Footer() {
  const [volume, setVolume] = useState(JSON.parse(localStorage.getItem('currentVolume')) || 0.3)
  const [muted, setMuted] = useState(false)

  return (
    <footer className='footer'>
      <MusicInfo/>
      <Player 
        volume={volume}
        muted={muted}
      />
      <MusicTool
        volume={volume}
        setVolume={setVolume}
        muted={muted}
        setMuted={setMuted}
      />
    </footer>
  )
}

export default Footer