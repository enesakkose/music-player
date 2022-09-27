import React, { useCallback, useMemo, useState } from 'react'
import Icon from '@/components/Icon'
import CustomRange from '@/components/CustomRange'
import { Link } from 'react-router-dom'
import { debounce } from 'lodash'
import '@/components/Footer/MusicTool.scss'

function MusicTool({ volume, setVolume }) {
  
  const volumeIcon = useMemo(() => {
    if(volume === 0 ) return 'Unmute'
    if(volume > 0 && volume < .33) return 'VolumeLow'
    if(volume >= .33 && volume < .66) return 'Volumemedium'
    return 'Volumeup'
  }, [volume])

  return (
    <div className="footer__music__tool">
      <Link to='/lyrics' className='footer__music__tool__lyricsBtn'>
        <Icon name='Microphone' size={22}/>
      </Link>
      <button>
        <Icon name='Queue' size={22}/>
      </button>
      <div className="footer__music__tool__range">
        <button 
          className='volumeBtn' 
        >
          <Icon 
            name={volumeIcon} 
            size={24}
          />
        </button>
        <CustomRange
          value={volume}
          onChange={value => setVolume(value)}
          min={0} 
          max={1}
          step={0.01}
        />
      </div>
    </div>
  )
}

export default MusicTool