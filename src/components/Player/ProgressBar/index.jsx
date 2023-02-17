import React from 'react'
import clsx from 'clsx'
import CustomRange from '@/components/CustomRange'
import { getTimeConvert } from '@/utils/helpers/number'
import { useSelector } from 'react-redux'
import styles from '@/components/Player/ProgressBar/ProgressBar.module.scss'

function ProgressBar({ mobile, onChange, time = true }) {
  const { songTime, duration } = useSelector(state => state.audio)

  return (
    <div className={clsx(mobile ? styles.mobileProgressBar : styles.progressBar)}>
      {!mobile && <span>
        {getTimeConvert(songTime)}
      </span>}
      <CustomRange
        className={styles.range}
        min={0}
        max={duration}
        value={songTime}
        onChange={onChange}
      />
      {mobile && time && <div className={styles.mobileDuration}>
        <span>
          {getTimeConvert(songTime)}
        </span>
        <span>
          {getTimeConvert(duration)}
        </span>
      </div>}
      {!mobile && <span>
        {getTimeConvert(duration)}
      </span>}
    </div>
  )
}

export default ProgressBar