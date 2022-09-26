import React, { useEffect, useRef, useMemo } from 'react'
import Icon from '@/components/Icon'
import PlayBtn from '@/components/PlayBtn'
import CustomRange from '@/components/CustomRange'
import { useTimeConvert } from '@/hooks/useTimeConvert'
import { debounce } from 'lodash'
import '@/components/Footer/MusicPlayer.scss'

function MusicPlayer({ 
  isPlaying, 
  isActive, 
  handlePlayPause, 
  songTime,
  setSongTime,
  duration,
  setDuration,
  seekTime,
  volume,
  setSeekTime,
  current,
  handleNextSong,
  handlePrevSong
}) {

  const ref = useRef(null)

    if(ref.current){
      if(isPlaying) {
        ref.current.play()
      }else{
        ref.current.pause()
      }
    }

  
  
  useEffect(() => {
    ref.current.volume = volume
  }, [volume])

  
  useEffect(() => {
    ref.current.currentTime = seekTime
  }, [seekTime])


  return (
    <div className="footer__music__player">
        <audio
          src={current?.hub?.actions[1]?.uri}
          ref={ref}
          onEnded={handleNextSong}
          onTimeUpdate={(e) => setSongTime(e.target.currentTime)}
          onLoadedData={(e) => setDuration(e.target.duration)}
        />
        <div className="footer__music__player__actionBtns">
          <button onClick={handlePrevSong} className='footer__previousBtn'>
            <Icon name='Previous' size={36}/>
          </button>
          <button onClick={handlePlayPause}>
            <PlayBtn playPause={isPlaying && isActive} className='footer__playBtn'/>
          </button>
          <button onClick={handleNextSong} className='footer__nextBtn'>
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
            onChange={value => setSeekTime(value)}
          />
          <span className='time'>
            {useTimeConvert(duration)}
          </span>
        </div>
    </div>
  )
}

export default MusicPlayer