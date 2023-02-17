import React, { useMemo, useState } from 'react'
import Icon from '@/components/UI/Icon'
import Button from '@/components/UI/Button'
import CustomRange from '@/components/CustomRange'
import { useSelector, useDispatch } from 'react-redux'
import { setVolume, setMuted } from '@/store/volume'
import styles from '@/Parts/Footer/MusicTool/Range/Range.module.scss'

function Range() {
  const dispatch = useDispatch()
  const { volume, muted } = useSelector(state => state.volume)
  const [mutedVolume, setMutedVolume] = useState(0)

  const volumeIcon = useMemo(() => {
    localStorage.setItem('currentVolume', JSON.stringify(volume))
    if (muted === true || volume === 0) return 'Unmute'
    if (volume > 0 && volume < .33) return 'VolumeLow'
    if (volume >= .33 && volume < .66) return 'Volumemedium'
    return 'Volumeup'
  }, [volume, muted])
  //useMemo used for don't re-render icons when volume changes 

  const handleChangeVolume = (value) => {
    if (muted === true) dispatch(setMuted(false))//to switch back to volume state  when handle change
    dispatch(setVolume(value))
  }
  const handleVolumeBtn = () => {
    if (volume === 0) dispatch(setVolume(0.01))
    dispatch(setMuted(!muted))
    setMutedVolume(0)
  }

  return (
    <div className={styles.rangeContainer}>
      <Button hover='h-primary' onClick={handleVolumeBtn}>
        <Icon name={volumeIcon} size={25}/>
      </Button>
      <CustomRange
        className={styles.range}
        value={muted ? mutedVolume : volume}
        onChange={value => handleChangeVolume(value)}
        min={0}
        max={1}
        step={0.01}
      />
    </div>
  )
}

export default Range