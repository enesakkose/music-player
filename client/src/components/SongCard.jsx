import React, { useEffect } from 'react'
import PlayBtn from '@/components/PlayBtn'
import { Link } from 'react-router-dom'
import { setCurrent, playPause, setCurrentSongs } from '@/store/player'
import { useDispatch, useSelector } from 'react-redux'
import '@/components/SongCard.scss'

function SongCard({song, index, data}) {
  const dispatch = useDispatch()
  const { current, isPlaying } = useSelector(state => state.player)

  const updateCurrent = () => {
      dispatch(setCurrent({ song, index }))
      dispatch(setCurrentSongs(data))

      if(current.key === song.key) return dispatch(playPause(!isPlaying))
      if(current.key !== song.key) return dispatch(playPause(true))
  }

  const isActiveBtn = current?.key === song?.key && isPlaying

  return (
    <div className='songCard'>
      <div className="songCard__img">
        <img src={song.images.coverart} alt={song.title} />
        <button 
          className={`songCard__img__btn ${isActiveBtn ? 'showBtn' : ''}`}
          onClick={updateCurrent}
        >
          <PlayBtn playPause={isPlaying && current?.title === song.title} />
        </button>
      </div>
      <div className="songCard__info">
        <h4 className='songCard__info__title'>{song.title}</h4>
        <span className='songCard__info__subtitle'>{song.subtitle}</span>
      </div>
      <Link to={`/album/${song.key}`} className='perde'></Link>
    </div>
  )
}

export default SongCard