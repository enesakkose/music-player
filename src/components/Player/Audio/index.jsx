import React, { useEffect, useState, useRef, useCallback } from 'react'
import ProgressBar from '@/components/Player/ProgressBar'
import { handleNextSong } from '@/utils/helpers/player'
import { playPause } from '@/store/player'
import { useDispatch, useSelector } from 'react-redux'
import { addSongToRecentSong } from 'firebase/db'
import { setSongTime, setDuration } from '@/store/audio'

function Audio({ mobile = false, time, ...props }) {
  const dispatch = useDispatch()
  const audioRef = useRef(null)
  const {
    current,
    isPlaying,
    isActive,
    currentIndex,
    currentSongs
  } = useSelector(state => state.player)
  const { profile } = useSelector(state => state.profiles) || {}
  const { volume, muted } = useSelector(state => state.volume)
  const [seekTime, setSeekTime] = useState(0)

  if (audioRef.current) {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }

  useEffect(() => {
    if (isActive === true) {
      dispatch(playPause(true))
      addSongToRecentSong(current, profile?.recentSongs)
      localStorage.setItem('currentSong', JSON.stringify(current))
    }
  }, [current])

  const onTimeUpdate = (e) => {
    //setSongTime(e.target.currentTime)
    dispatch(setSongTime(e.target.currentTime))
  }

  const onLoadedData = (e) => {
    //setDuration(e.target.duration)
    dispatch(setDuration(e.target.duration))
  }

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

  const handlePress = useCallback((e) => {
    if (e.which === 32 && isActive === true &&
      document.activeElement.tagName.toLowerCase() === 'body'
    ) {
      if (isPlaying === true) {
        dispatch(playPause(false))
      } else {
        dispatch(playPause(true))
      }
    }
  }, [isPlaying])

  useEffect(() => {
    document.addEventListener("keydown", handlePress);
    return () => document.removeEventListener("keydown", handlePress);
  }, [handlePress]);

  return (
    <>
      <audio
        id='audio'
        src={current?.hub?.actions[1]?.uri}
        ref={audioRef}
        //onLoop={true}
        onEnded={() => isActive ? handleNextSong(currentIndex, currentSongs) : undefined}
        muted={muted}
        autoPlay={isPlaying ? true : false}
        onTimeUpdate={onTimeUpdate}
        onLoadedData={onLoadedData}
        onPlay={() => dispatch(playPause(true))}
        onPause={() => dispatch(playPause(false))}
        {...props}
      />
      <ProgressBar
        time={time}
        mobile={mobile}
        onChange={value => anc(value)}
      />
    </>
  )
}

export default Audio