import React, { useCallback, useMemo, useState } from 'react'
import Icon from '@/components/Icon'
import CustomRange from '@/components/CustomRange'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '@/components/Footer/MusicTool.scss'

function MusicTool({ volume, setVolume, muted, setMuted }) {
  const { isActive } = useSelector(state => state.player)
  const [mutedVolume,setMutedVolume] = useState(0)

  const volumeIcon = useMemo(() => {
    if(muted === true || volume === 0 ) return 'Unmute'
    if(volume > 0 && volume < .33) return 'VolumeLow'
    if(volume >= .33 && volume < .66) return 'Volumemedium'
    return 'Volumeup'
  }, [volume, muted])
  //useMemo used for don't re-render icons when volume changes 

  const handleChangeVolume = (value) => {
    if(!muted) setMuted(false)//to switch back to volume state  when handle change
    setVolume(value)
  }
  const handleVolumeBtn = () => {
    if(volume === 0) setVolume(0.01)
    setMuted(!muted)
    setMutedVolume(0)
  }

  return (
    <div className="footer__music__tool">
      {isActive && <NavLink to='/lyrics' className='footer__music__tool__lyricsBtn'>
        <Icon name='Microphone' size={22}/>
      </NavLink>}
      <div className="footer__music__tool__range">
        <button className='volumeBtn' onClick={handleVolumeBtn}>
          <Icon 
            name={volumeIcon} 
            size={24}
          />
        </button>
        <CustomRange
          value={muted ? mutedVolume : volume}
          onChange={value => handleChangeVolume(value)}
          min={0} 
          max={1}
          step={0.01}
        />
      </div>
    </div>
  )
}

export default MusicTool