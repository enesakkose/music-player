import React, { useState, useCallback } from 'react'
import Icon from '@/components/Icon'
import CustomRange from '@/components/CustomRange'
import '@/components/Footer/MusicTool.scss'

function MusicTool() {

  const [volume, setVolume] = useState(0)
  

  return (
    <div className="footer__music__tool">
      <button>
        <Icon name='Microphone' size={22}/>
      </button>
      <button>
        <Icon name='Queue' size={22}/>
      </button>
      <div className="footer__music__tool__range">
        <button className='volumeBtn'>
          <Icon 
            name={volume === 0 ? 'Unmute' 
            : volume >= .44 ? 'Volumeup' : 'Volumemedium'} 
            size={22}
          />
        </button>
        <CustomRange 
          value={volume} 
          onChange={value => setVolume(value)} 
          min={0} 
          max={1} 
          step={0.01} 
          defaultValue={0.5} 
        />
      </div>
    </div>
  )
}

export default MusicTool