import React, { useEffect, useState } from 'react'
import MusicInfo from '@/components/Footer/MusicInfo'
import MusicPlayer from '@/components/Footer/MusicPlayer'
import MusicTool from '@/components/Footer/MusicTool'
import { useSelector, useDispatch } from 'react-redux'
import { playPause } from '@/store/player'
import '@/components/Footer/Footer.scss'

function Footer() {
  const dispatch = useDispatch()
  const { current, isPlaying, isActive } = useSelector(state => state.player)
  const [volume, setVolume] = useState(0.3)
  const [duration, setDuration] = useState(0)
  const [seekTime, setSeekTime] = useState(0)
  const [songTime, setSongTime] = useState(0)
  
  const handlePlayPause = () => {
    if(!isActive) return

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  }

  useEffect(() => {
    dispatch(playPause(true))
  }, [current])

  return (
    <footer className='footer'>
      <MusicInfo current={current}/>
      <MusicPlayer 
        isPlaying={isPlaying}
        isActive={isActive}
        handlePlayPause={handlePlayPause}
        songTime={songTime}
        setSongTime={setSongTime}
        duration={duration}
        setDuration={setDuration}
        seekTime={seekTime}
        volume={volume}
        setSeekTime={setSeekTime}
        value={songTime}
        current={current}
      />
      <MusicTool
        volume={volume}
        setVolume={setVolume}
      />
    </footer>
  )
}

export default Footer