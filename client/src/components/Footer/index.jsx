import React, { useState } from 'react'
import MusicInfo from '@/components/Footer/MusicInfo'
import MusicPlayer from '@/components/Footer/MusicPlayer'
import MusicTool from '@/components/Footer/MusicTool'
import '@/components/Footer/Footer.scss'

function Footer() {
  const [volume, setVolume] = useState(0.3)

  return (
    <footer className='footer'>
      <MusicInfo/>
      <MusicPlayer 
        volume={volume}
      />
      <MusicTool
        volume={volume}
        setVolume={setVolume}
      />
    </footer>
  )
}

export default Footer