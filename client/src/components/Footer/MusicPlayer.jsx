import React, { useEffect, useMemo, useCallback, useState } from 'react'
import Icon from '@/components/Icon'
import PlayBtn from '@/components/PlayBtn'
import CustomRange from '@/components/CustomRange'
import { useSelector, useDispatch } from 'react-redux'
import { useTimeConvert } from '@/hooks/useTimeConvert'
import { setPlaying, setControl, setVolume } from '@/store/player'
import { debounce } from 'lodash'
import '@/components/Footer/MusicPlayer.scss'

function MusicPlayer({ audio, state, controls }) {

  const dispatch = useDispatch()
  const debouncedSeek = useCallback(
    debounce(
      value => controls.seek(value)
    , 0),
    []
  )
  
  const playBtn = () => {
    controls[state?.playing ? 'pause' : 'play']()
  }

  useEffect(() => {
    dispatch(setPlaying(state.playing))
  }, [state?.playing])
  
  useEffect(() => {
    dispatch(setControl(controls))
  }, [])

  return (
    <div className="footer__music__player">
        {audio}
        <div className="footer__music__player__actionBtns">
          <button className='footer__previousBtn'>
            <Icon name='Previous' size={36}/>
          </button>
          <button onClick={playBtn}>
            <PlayBtn className='footer__playBtn' playing={state?.playing}/>
          </button>
          <button className='footer__nextBtn'>
            <Icon name='Next' size={36}/>
          </button>
        </div>
        <div className="footer__music__player__range">
          <span className='time'>
            {useTimeConvert(state?.time)}
          </span>
          <CustomRange
          className='range'  
          min={0} 
          max={state?.duration || 1}
          value={state?.time} 
          onChange={(value) => debouncedSeek(value)}
          />
          <span className='time'>
            {useTimeConvert(state?.duration)}
          </span>
        </div>
    </div>
  )
}

export default MusicPlayer