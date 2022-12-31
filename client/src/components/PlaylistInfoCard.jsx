import React from 'react'
import Icon from '@/components/Icon'
import PlayBtn from '@/components/PlayBtn'
import clsx from 'clsx'
import { setCurrent, setCurrentSongs, playPause } from '@/store/player'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '@/components/playlistInfoCard.scss'

function PlaylistInfoCard({playlist, user = false}) {
  const dispatch = useDispatch()
  const { current, isPlaying } = useSelector(state => state.player)
  const validCoverImg = playlist.coverURL === null && playlist.addedSongs.length > 0
  const coverImage = playlist?.addedSongs[0]?.track?.images?.coverart
  const haveSongs = playlist.addedSongs.some(song => song.id === current.key)
  
  const playInPlaylist = () => {
    if(current.key !== playlist.addedSongs[0].id && haveSongs) 
    return dispatch(playPause(!isPlaying))

    dispatch(setCurrent(playlist.addedSongs[0].track))
    dispatch(setCurrentSongs(playlist.addedSongs))

    if(current.key === playlist.addedSongs[0].id) return dispatch(playPause(!isPlaying))
    if(current.key !== playlist.addedSongs[0].id) return dispatch(playPause(true))
  }

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
        {playlist.addedSongs.length > 0 && <PlayBtn
          onClick={playInPlaylist}
          playPause={isPlaying && haveSongs}
          className={`playlistInfoCard__img__btn ${isPlaying && haveSongs ? 'showBtn': ''}`}
        />}
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