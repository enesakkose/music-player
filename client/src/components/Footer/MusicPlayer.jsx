import React from 'react'
import Icon from '@/components/Icon'
import PlayBtn from '@/components/PlayBtn'
import CustomRange from '@/components/CustomRange'
import '@/components/Footer/MusicPlayer.scss'


function MusicPlayer() {
  return (
    <div className="footer__music__player">
        <div className="footer__music__player__actionBtns">
          <button className='footer__previousBtn'>
            <Icon name='Previous' size={36}/>
          </button>
          <PlayBtn className='footer__playBtn'/>
          <button className='footer__nextBtn'>
            <Icon name='Next' size={36}/>
          </button>
        </div>
        <div className="footer__music__player__range">
          <span>1:23</span>
          <CustomRange
          className='range'  
          min={0} 
          max={1} 
          step={0.01} 
          defaultValue={0.5} 
        />
          <span>1.23</span>
        </div>
    </div>
  )
}

export default MusicPlayer