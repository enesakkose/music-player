import React, { useEffect } from 'react'
import PlayBtn from '@/components/PlayBtn'
import { Link } from 'react-router-dom'
import { setCurrent, playPause, setCurrentSongs } from '@/store/player'
import { useDispatch  } from 'react-redux'
import '@/components/SongCard.scss'

function SongCard({song, current, isPlaying, index, data}) {
  const dispatch = useDispatch()

  const updateCurrent = () => {
      dispatch(setCurrent({ song, index }))
      if(current.key === song.key){
        dispatch(playPause(!isPlaying))
      } else{
        dispatch(playPause(true))
      }  
  }

  useEffect(() => {
    dispatch(setCurrentSongs(data))
  }, [])

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