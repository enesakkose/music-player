import React, { useEffect } from 'react'
import MusicInfo from '@/components/Footer/MusicInfo'
import MusicPlayer from '@/components/Footer/MusicPlayer'
import MusicTool from '@/components/Footer/MusicTool'
import { useAudio } from 'react-use'
import { useSelector } from 'react-redux'
import '@/components/Footer/Footer.scss'

function Footer() {
  const { current, playing, control } = useSelector(state => state.player)
  
  const [audio, state, controls, ref] = useAudio({
    src: current?.url
  })
  
  useEffect(() => {
    controls.play()
  }, [current])

  return (
    <footer className='footer'>
      <MusicInfo current={current}/>
      <MusicPlayer 
        audio={audio} 
        state={state}
        controls={controls}
      />
      <MusicTool
        controls={controls}
        state={state}
      />
    </footer>
  )
}

export default Footer

// find a new audio package and rearrange musicplayer