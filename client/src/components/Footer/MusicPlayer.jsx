import React, { useEffect, useRef, useState } from 'react'
import Icon from '@/components/Icon'
import PlayBtn from '@/components/PlayBtn'
import CustomRange from '@/components/CustomRange'
import { useTimeConvert } from '@/hooks/useTimeConvert'
import { useSelector, useDispatch } from 'react-redux'
import { playPause, nextSong, prevSong } from '@/store/player'
import { setRecentSongs } from '@/store/song'
import { debounce } from 'lodash'
import '@/components/Footer/MusicPlayer.scss'

function MusicPlayer({volume}) {
  const ref = useRef(null)
  const dispatch = useDispatch()
  const { current, isPlaying, isActive, currentIndex, currentSongs } = useSelector(state => state.player)
  const [duration, setDuration] = useState(0)
  const [seekTime, setSeekTime] = useState(0)
  const [songTime, setSongTime] = useState(0)

  if(ref.current){
    if(isPlaying) {
      ref.current.play()
    } else{
      ref.current.pause()
    }
  }
  
  useEffect(() => {
    dispatch(playPause(true))
    if(isActive) dispatch(setRecentSongs(current))
  }, [current])

  useEffect(() => {
    ref.current.volume = volume
  }, [volume])

  
  useEffect(() => {
    ref.current.currentTime = seekTime
  }, [seekTime])

  const handlePlayPause = () => {
    if(!isActive) return
    if(isPlaying) return dispatch(playPause(false))
    if(!isPlaying) return dispatch(playPause(true))
  }

  const handleNextSong = () => {
    if(currentIndex === currentSongs.length - 1) return dispatch(nextSong(0))
    if(currentIndex !== currentSongs.length - 1) return dispatch(nextSong(currentIndex + 1)) 
  }

  const handlePrevSong = () => {
    if (currentIndex === 0) return dispatch(prevSong(currentSongs.length - 1)) 
    if(currentIndex !== 0) return dispatch(prevSong(currentIndex - 1))
  }

  const onc = debounce((value) => {
    setSeekTime(value)
  }, 10)

  return (
    <div className="footer__music__player">
      <audio
        src={current?.hub?.actions[1]?.uri}
        ref={ref}
        onEnded={handleNextSong}
        autoPlay={true}
        onTimeUpdate={(e) => setSongTime(e.target.currentTime)}
        onLoadedData={(e) => setDuration(e.target.duration)}
      />
      <div className="footer__music__player__actionBtns">
        <button
          disabled={!isActive}
          onClick={handlePrevSong} 
          className='footer__previousBtn'
        >
          <Icon name='Previous' size={36}/>
        </button>
        <PlayBtn
          onClick={handlePlayPause} 
          playPause={isPlaying && isActive} className='footer__playBtn' 
        />
        <button
          disabled={!isActive} 
          onClick={handleNextSong} 
          className='footer__nextBtn'
        >
          <Icon name='Next' size={36}/>
        </button>
      </div>
      <div className="footer__music__player__range">
        <span className='time'>
          {useTimeConvert(songTime)}
        </span>
        <CustomRange
          className='range'  
          min={0} 
          max={duration}
          value={songTime} 
          onChange={value => onc(value)}
        />
        <span className='time'>
          {useTimeConvert(duration)}
        </span>
      </div>
    </div>
  )
}

export default MusicPlayer