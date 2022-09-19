import React, { useCallback, useMemo } from 'react'
import Icon from '@/components/Icon'
import CustomRange from '@/components/CustomRange'
import { debounce } from 'lodash'
import '@/components/Footer/MusicTool.scss'

function MusicTool({ controls, state }) {
  const debouncedVolume = useCallback(
    debounce(
      value => updateV(value)
    , 0),
    []
  )
  
  const updateV = (value) => {
    controls.unmute()
    controls.volume(value)
  }
  
  const volumeIcon = useMemo(() => {
    if(state.volume === 0 || state.muted) return 'Unmute'
    if(state.volume > 0 && state.volume < .33) return 'VolumeLow'
    if(state.volume >= .33 && state.volume < .66) return 'Volumemedium'
    return 'Volumeup'
  }, [state.volume, state.muted])

  return (
    <div className="footer__music__tool">
      <button>
        <Icon name='Microphone' size={22}/>
      </button>
      <button>
        <Icon name='Queue' size={22}/>
      </button>
      <div className="footer__music__tool__range">
        <button 
          className='volumeBtn' 
          onClick={controls[state.muted ? 'unmute' : 'mute']}
        >
          <Icon 
            name={volumeIcon} 
            size={24}
          />
        </button>
        <CustomRange 
          value={state.muted ? 0 : state?.volume} 
          onChange={(value) => debouncedVolume(value)} 
          min={0} 
          max={1} 
          step={0.01} 
        />
      </div>
    </div>
  )
}

export default MusicTool