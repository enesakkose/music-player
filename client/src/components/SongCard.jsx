import React, { useState } from 'react'
import PlayBtn from '@/components/PlayBtn'
import { Link } from 'react-router-dom'
import { setCurrent, setControl, setPlaying } from '@/store/player'
import { useDispatch, useSelector } from 'react-redux'
import '@/components/SongCard.scss'

function SongCard({song}) {
  const dispatch = useDispatch()
  const { playing, current, control } = useSelector(state => state.player)
  
  const updateCurrent = () => {
        
  }

  
  //card play pause button and footer play pause button
  const currentItem = current?.id === song.id
  return (
    <div className='songCard'>
        <div className="songCard__img">
            <img src={song.links.images[1].url} alt={song.name} />
            <button 
              className={`songCard__img__btn ${currentItem && playing ? 'showBtn' : ''}`}
              onClick={updateCurrent}
            >
              <PlayBtn playing={currentItem && playing}/>
            </button>
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