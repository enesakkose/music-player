import React from 'react'
import Icon from '@/components/Icon'
import PlayBtn from '@/components/PlayBtn'
import { Link } from 'react-router-dom'
import '@/components/playlistInfoCard.scss'

function PlaylistInfoCard({playlist}) {
  return (
    <div className='playlistInfoCard'>
        <div className="playlistInfoCard__img">
            <Icon name='Music' size={52}/>
            <PlayBtn className='playlistInfoCard__img__btn'/>
        </div>
        <div className="playlistInfoCard__info">
            <h4>{playlist.name}</h4>
            <span>By Aaa(username)</span>
        </div>
        <Link to={`/playlist/${playlist.id}`} className='perde'></Link>
    </div>
  )
}
export default PlaylistInfoCard