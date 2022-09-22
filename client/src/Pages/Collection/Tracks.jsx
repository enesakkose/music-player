import React from 'react'
import PlaylistHeader from '@/components/PlaylistHeader'
import EmptyPlaylist from '@/components/EmptyPlaylist'
import SongsTable from '@/components/SongsTable'
import SongsTableList from '@/components/SongsTableList'
import PlayBtn from '@/components/PlayBtn'
import Icon from '@/components/Icon'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '@/Pages/Collection/Tracks.scss'

function Tracks() {

  const { favorites } = useSelector(state => state.favorite)
  
  return (
    <div className='favoriteTracks'>
      <PlaylistHeader className='favoriteTracks__header'>
        <div className="favoriteTracks__header__cover cover">
          <Icon name='Favorite' size={75}/>
        </div>
        <div className="favoriteTracks__info info">
          <h6>PLAYLIST</h6>
          <h1>LIKED SONGS</h1>
          {favorites.length > 0 && <h6>{favorites.length} songs</h6>}
        </div>
      </PlaylistHeader>
      <div 
        className={`favoriteTracks__main 
        ${favorites.length === 0 ? 'favoriteTracks__empty' : ''}`}
      >
        <div className="favoriteTracks__main__background"/>
        {favorites.length === 0 && 
        <EmptyPlaylist 
          title='Songs you like will appear here'
          text='Save songs by tapping the heart icon.'
        >
          <Link to='/search' className="emptyPlaylistBtn">Find Songs</Link>
        </EmptyPlaylist>}
        {favorites.length > 0 && <div className="favoriteTracks__main__content">
          <PlayBtn className='favoriteTracks__main__content__playBtn'/>
          <div className="favoriteTracks__main__content__songs">
            <SongsTable/>
            <div className='favoriteTracks__main__content__songs__list'>
              {favorites.map((favorite, index) => (
                <SongsTableList index={index} song={favorite}/>
              ))}
            </div>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Tracks