import React from 'react'
import PlayBtn from '@/components/PlayBtn'
import { Link, useLocation } from 'react-router-dom'
import { routes } from '@/routes'
import { setCurrent, playPause, setCurrentSongs } from '@/store/player'
import { useDispatch, useSelector } from 'react-redux'
import '@/components/SongCard.scss'

function SongCard({song, index, data, ...props}) {
  const location = useLocation()
  const dispatch = useDispatch()
  const { current, isPlaying } = useSelector(state => state.player)

  const updateCurrent = () => {
      if(current.key !== song.key){
        dispatch(setCurrent({ song, index }))
        dispatch(setCurrentSongs(data))
      }
 
      if(current.key === song.key) return dispatch(playPause(!isPlaying))
      if(current.key !== song.key) return dispatch(playPause(true))
  }
  const backgroundColor = song?.images?.joecolor.slice(18,24)
  const isActiveBtn = current?.key === song?.key && isPlaying
  
  return (
    <div className='songCard' {...props}>
      <div className="songCard__img" style={{ backgroundColor: `#${backgroundColor}`}}>
        <img src={song.images.coverart} alt={song.title} />
        <PlayBtn
          className={`songCard__img__btn ${isActiveBtn ? 'showBtn' : ''}`}
          onClick={updateCurrent}
          playPause={isPlaying && current?.title === song.title}
        />
      </div>
      <div className="songCard__info">
        <h5 className='songCard__info__title'>{song.title}</h5>
        <span className='songCard__info__subtitle'>{song.subtitle}</span>
      </div>
      <Link to={`/album/${song.key}`} className='perde'></Link>
    </div>
  )
}

export default SongCard