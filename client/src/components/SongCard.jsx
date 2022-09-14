import React from 'react'
import PlayBtn from '@/components/PlayBtn'
import { Link } from 'react-router-dom'
import '@/components/SongCard.scss'

function SongCard({song}) {
    
  return (
    <div className='songCard'>
        <div className="songCard__img">
            <img src={song.links.images[0].url} alt={song.name} />
            <PlayBtn className='songCard__img__btn'/>
        </div>
        <div className="songCard__info">
            <h4>{song.name}</h4>
            <span>{song.author}</span>
        </div>
        <Link to={`/album/${song.id}`} className='perde'></Link>
    </div>
  )
}

export default SongCard