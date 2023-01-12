import React from 'react'
import clsx from 'clsx'
import CustomRange from '@/components/CustomRange'
import { getTimeConvert } from '@/utils/number'
import '@/components/Player/ProgressBar.scss'


function ProgressBar({ songTime, duration, mobile, onChange }) {
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
      {mobile && <div className="mobileDuration">
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