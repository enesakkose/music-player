import React from 'react'
import Icon from '@/components/Icon'
import PlayBtn from '@/components/PlayBtn'
import { Link } from 'react-router-dom'
import '@/components/playlistInfoCard.scss'

function PlaylistInfoCard({playlist, user}) {
  const validCoverImg = playlist.coverURL === null && playlist.addedSongs.length > 0
  const coverImage = playlist?.addedSongs[0]?.track?.images?.coverart

  return (
    <div className='playlistInfoCard'>
      <div className="playlistInfoCard__img">
        {playlist.coverURL !== null 
          ? (<img src={playlist.coverURL} alt="cover"/>)
          
          : (validCoverImg 
              ? <img src={coverImage} alt="cover"/>  
              : <Icon name='Music' size={52}/>
            )
        }
        <PlayBtn className='playlistInfoCard__img__btn'/>
      </div>
      <div className="playlistInfoCard__info">
        <h5>{playlist.name}</h5>
        <span>{user?.displayName}</span>
      </div>
      <Link to={`/playlist/${playlist.id}`} className='perde'></Link>
    </div>
  )
}
export default PlaylistInfoCard