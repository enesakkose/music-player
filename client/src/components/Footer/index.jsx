import React, { useEffect, useState } from 'react'
import MusicInfo from '@/components/Footer/MusicInfo'
import MusicPlayer from '@/components/Footer/MusicPlayer'
import MusicTool from '@/components/Footer/MusicTool'
import { useSelector, useDispatch } from 'react-redux'
import { playPause, nextSong, prevSong } from '@/store/player'
import '@/components/Footer/Footer.scss'

function Footer() {
  const dispatch = useDispatch()
  const { current, isPlaying, isActive, currentIndex, currentSongs } = useSelector(state => state.player)

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

  const handleNextSong = () => {
    if(currentIndex === currentSongs.length - 1){
      dispatch(nextSong(0))
    }else{
      dispatch(nextSong(currentIndex + 1))
    }
  }

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1))
    }else{
      dispatch(prevSong(currentIndex - 1))
    }
    
  }

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
        handleNextSong={handleNextSong}
        handlePrevSong={handlePrevSong}
      />
      <MusicTool
        volume={volume}
        setVolume={setVolume}
      />
    </footer>
  )
}

export default Footer