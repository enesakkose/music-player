import React from 'react'
import PlaylistHeader from '@/components/PlaylistHeader'
import EmptyPlaylist from '@/components/EmptyPlaylist'
import { Link } from 'react-router-dom'
import Icon from '@/components/Icon'
import '@/Pages/Collection/Tracks.scss'

function Tracks() {
  return (
    <div className='favoriteTracks'>
      <PlaylistHeader className='favoriteTracks__header'>
        <div className="favoriteTracks__header__cover cover">
          <Icon name='Favorite' size={75}/>
        </div>
        <div className="favoriteTracks__info info">
          <h6>PLAYLIST</h6>
          <h1>LIKED SONGS</h1>
        </div>
      </PlaylistHeader>
      <div className="favoriteTracks__main">
        <EmptyPlaylist 
          title='Songs you like will appear here'
          text='Save songs by tapping the heart icon.'
         >
          <Link to='/search' className="emptyPlaylist-btn">Find Songs</Link>
        </EmptyPlaylist>
      </div>
      
    </div>
  )
}

export default Tracks