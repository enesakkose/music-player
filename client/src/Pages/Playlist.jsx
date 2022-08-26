import React from 'react'
import { useParams } from 'react-router-dom'
import Icon from '@/components/Icon'
import { useSelector } from 'react-redux'
import '@/Pages/Playlist.scss'


function Playlist() {
  const params = useParams()
  const { playlists } = useSelector(state => state.playlist) 
  const playlistName = playlists.find((playlist) => playlist.id === params.id)
  
    

  return (
    <div className='playlist'>
        <header className="playlist__header">
           <div className="playlist__header__cover">
            <Icon name='Music' size={75}/>
            <span className="playlist__header__cover__action">
                <Icon name='Pencil' size={48}/>
                Choose Photo
            </span>
           </div>
           <div className="playlist__header__info">
            <h6>PLAYLIST</h6>
            <h1>{playlistName?.name}</h1>
            <h6 className='playlist__header__info__userName'>
                Aaa(username)
            </h6>
           </div>
        </header>
        
    </div>
  )
}

export default Playlist