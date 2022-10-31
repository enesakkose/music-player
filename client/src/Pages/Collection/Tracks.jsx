import React from 'react'
import PlaylistHeader from '@/components/PlaylistHeader'
import EmptyPlaylist from '@/components/EmptyPlaylist'
import SongsTableHeader from '@/components/SongsTableHeader'
import SongsTableList from '@/components/SongsTableList'
import ActionBtns from '@/components/ActionBtns'
import Icon from '@/components/Icon'
import FavoriteIcon from '@/icons/Favorite.svg'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '@/Pages/Collection/Tracks.scss'

function Tracks() {
  const { favoritesPlaylist } = useSelector(state => state.playlist)

  return (
    <div className='favoriteTracks'>
      <PlaylistHeader
        className='favoriteTracks__header'
        img={FavoriteIcon}
        infoTitle='PLAYLIST'
        infoHeader='LIKED SONGS'
      >
        {favoritesPlaylist.length > 0 && <h6>{favoritesPlaylist.length} songs</h6>}
      </PlaylistHeader>
      <div
        className={`favoriteTracks__main 
        ${favoritesPlaylist.length === 0 ? 'favoriteTracks__empty' : ''}`}
      >
        <div className="favoriteTracks__main__background" />
        {favoritesPlaylist.length === 0 &&
          <EmptyPlaylist
            title='Songs you like will appear here'
            text='Save songs by tapping the heart icon.'
          >
            <Link to='/search' className="emptyPlaylistBtn">Find Songs</Link>
          </EmptyPlaylist>}
        {favoritesPlaylist.length > 0 && <div className="favoriteTracks__main__content">
          <ActionBtns findSongs={favoritesPlaylist} />
          <div className="favoriteTracks__main__content__songs">
            <SongsTableHeader />
            <div className='favoriteTracks__main__content__songs__list'>
              {favoritesPlaylist.map((favorite, index) => (
                <SongsTableList
                  key={favorite.key}
                  index={index}
                  song={favorite}
                  findSongs={favoritesPlaylist}
                />
              ))}
            </div>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Tracks