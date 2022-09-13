import React from 'react'
import MusicInfo from '@/components/Footer/MusicInfo'
import MusicPlayer from '@/components/Footer/MusicPlayer'
import MusicTool from '@/components/Footer/MusicTool'
import '@/components/Footer/Footer.scss'

function Footer() {
  return (
    <footer className='footer'>
      <MusicInfo/>
      <MusicPlayer/>
      <MusicTool/>
    </footer>
  )
}

export default Footer