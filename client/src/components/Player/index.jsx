import React, { useEffect, useRef, useState, useCallback } from 'react'
import clsx from 'clsx'
import ActionBtns from '@/components/Player/ActionBtns'
import ProgressBar from '@/components/Player/ProgressBar'
import { handleNextSong } from '@/utils/player'
import { useSelector, useDispatch } from 'react-redux'
import { addSongToRecentSong } from '@/firebase/db'
import { playPause } from '@/store/player'
import '@/components/Player/Player.scss'

function Player({ volume, muted, mobile = false, btnSize }) {
  const { 
    current, 
    isPlaying, 
    isActive, 
    currentIndex, 
    currentSongs
  } = useSelector(state => state.player)
  const audioRef = useRef(null)
  const dispatch = useDispatch()
  const { profile } = useSelector(state => state.profiles) || {}

  const [duration, setDuration] = useState(0)
  const [seekTime, setSeekTime] = useState(0)
  const [songTime, setSongTime] = useState(0)

  if(audioRef.current){
    if(isPlaying) {
      audioRef.current.play()
    } else{
      audioRef.current.pause()
    }
  }

  useEffect(() => {
    if(isActive === true) {
      dispatch(playPause(true))
      addSongToRecentSong(current, profile?.recentSongs)
      localStorage.setItem('currentSong', JSON.stringify(current))
    }   
  }, [current])

  useEffect(() => {
    audioRef.current.volume = volume
  }, [volume])

  useEffect(() => {
    audioRef.current.currentTime = seekTime

    const t = setTimeout(() => {
      audioRef.current.muted = false
    }, 500);

    return () => {
      clearTimeout(t)
    }
  }, [seekTime])

  const anc = (value) => {
    audioRef.current.muted = true
    setSeekTime(value)
  }

  const handlePress = useCallback(
    (e) => {
    if(e.which === 32 && isActive === true &&  
      document.activeElement.tagName.toLowerCase() === 'body'
    ) {
      if(isPlaying === true){
        dispatch(playPause(false))
      }else{
        dispatch(playPause(true))
      }
    }  
  },[isPlaying])

  useEffect(() => {
    document.addEventListener("keydown", handlePress);
    return () => document.removeEventListener("keydown", handlePress);
  }, [handlePress]);

  return (
    <div className={clsx(mobile ? 'mobileMusicPlayer' : "player")}>
      <audio
        src={current?.hub?.actions[1]?.uri}
        ref={audioRef}
        onEnded={() => handleNextSong(currentIndex, currentSongs)}
        muted={muted}
        autoPlay={isPlaying ? true : false}
        onTimeUpdate={(e) => setSongTime(e.target.currentTime)}
        onLoadedData={(e) => setDuration(e.target.duration)}
        onPlay={() => dispatch(playPause(true))}
        onPause={() => dispatch(playPause(false))}
      />
      <ActionBtns size={btnSize}/>
      <ProgressBar
        mobile={mobile}
        songTime={songTime} 
        duration={duration}
        onChange={value => anc(value)}
      />
    </div>
  )
}

export default Player