import React, { useState } from 'react'
import MusicInfo from '@/components/Footer/MusicInfo'
import MusicPlayer from '@/components/Footer/MusicPlayer'
import MusicTool from '@/components/Footer/MusicTool'
import '@/components/Footer/Footer.scss'

function Footer() {
  const [volume, setVolume] = useState(0.3)
  const [muted, setMuted] = useState(false)

  return (
    <footer className='footer'>
      <MusicInfo/>
      <MusicPlayer 
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