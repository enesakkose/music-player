import React, { useState } from 'react'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import MediaInfo from '@/components/MobilePlayer/MediaInfo'
import Player from '@/components/Player'
import FavoriteBtn from '@/components/FavoriteBtn'
import { useSelector } from 'react-redux'
import '@/components/MobilePlayer/WideMusicPlayer.scss'

function WideMusicPlayer({ className, setExpand }) {
  const [volume, setVolume] = useState(JSON.parse(localStorage.getItem('currentVolume')) || 0.3)
  const [muted, setMuted] = useState(false)
  const { current } = useSelector(state => state.player)
  const bg = current?.images?.joecolor?.slice(18,24)
  return (
    <div style={{ backgroundColor: `#${bg}` }} className={clsx('wideMusicPlayer', className)}>
      <button onClick={() => setExpand(prevState => !prevState)} className='wideMusicPlayerCloseBtn'>
        <Icon name='down' size={40}/>
      </button>
      <div className="cover">
        <img 
          src={current?.images?.coverart} 
          alt={current?.title} 
        />
      </div>
      <MediaInfo as={'h3'} name={current?.title} singerName={current?.subtitle} className='wideMusicPlayerInfo'>
        <Icon name='favorite' size={30}/>
        {/*<FavoriteBtn song={current}/>*/}
      </MediaInfo>
      <Player 
        mobile={true} 
        volume={volume} 
        muted={muted} 
        btnSize={54}
      />
    </div>
  )
}

export default WideMusicPlayer