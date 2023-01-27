import React from 'react'
import clsx from 'clsx'
import CustomRange from '@/components/CustomRange'
import { getTimeConvert } from '@/utils/number'
import { useSelector } from 'react-redux'
import '@/components/Player/ProgressBar.scss'

function ProgressBar({ mobile, onChange, time = true }) {
  const { songTime, duration } = useSelector(state => state.audio)

  return (
    <div className={clsx(mobile ? "mobileProgressBar" : "progressBar")}>
      {!mobile && <span className='duration'>
        {getTimeConvert(songTime)}
      </span>}
      <CustomRange
        className='range'  
        min={0} 
        max={duration}
        value={songTime} 
        onChange={onChange}
      />
      {mobile && time && <div className="mobileDuration">
        <span className='duration'>
          {getTimeConvert(songTime)}
        </span>
        <span className='duration'>
          {getTimeConvert(duration)}
        </span>
      </div>}
      {!mobile && <span className='duration'>
        {getTimeConvert(duration)}
      </span>}
    </div>
  )
}

export default ProgressBar