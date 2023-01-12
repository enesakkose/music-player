import React, { useState } from 'react'
import FavoriteBtn from '@/components/FavoriteBtn'
import PlayerProgressBar from '@/components/MobilePlayer/PlayerProgressBar'
import PlayBtn from '@/components/PlayBtn'
import Icon from '@/components/Icon'
import MediaInfo from '@/components/MobilePlayer/MediaInfo'
import WideMusicPlayer from '@/components/MobilePlayer/WideMusicPlayer'
import { useSelector } from 'react-redux'
import '@/components/MobilePlayer/MobilePlayer.scss'

function MobilePlayer() {
  const [ expand, setExpand ] = useState(false)
  const { current } = useSelector(state => state.player)
  const bg = current?.images?.joecolor?.slice(18,24)

  return (
    <div style={{ backgroundColor: `#${bg}`}} className='mobilePlayer'>
      <div 
        onClick={() => setExpand(prevState => !prevState)} className="mobilePlayer__actions"
      >
        <img src={current?.images?.coverart} alt={current?.title}/>
        <MediaInfo as={'h6'} name={current?.title} singerName={current?.subtitle}/>
        <FavoriteBtn song={current} size={28}/>
        <PlayBtn className='mobilePlayerPlay'/>
      </div>
      <PlayerProgressBar/>
      {expand && 
      <WideMusicPlayer 
        className={expand ? 'expandPlayer' : 'shrinkPlayer'}
        setExpand={setExpand}
      />}
    </div>
  )
}

export default MobilePlayer