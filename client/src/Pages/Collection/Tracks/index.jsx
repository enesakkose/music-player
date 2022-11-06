import React from 'react'
import PlaylistHeader from '@/components/PlaylistHeader'
import EmptyPlaylist from '@/components/EmptyPlaylist'
import SongsTableHeader from '@/components/SongsTableHeader'
import SongsTableList from '@/components/SongsTableList'
import ActionBtns from '@/components/ActionBtns'
import Icon from '@/components/Icon'
import clsx from 'clsx'
import FavoriteIcon from '@/icons/Favorite.svg'
import Loading from '@/components/Loading'
import MainContent from '@/Pages/Collection/Tracks/MainContent'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '@/Pages/Collection/Tracks/Tracks.scss'

function Tracks() {
  const { defaultPlaylists } = useSelector(state => state.playlist)
  if(defaultPlaylists === null) return <Loading/>
  
  const favoritesPlaylist = defaultPlaylists[0].favoriteSongs

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
      <div className={clsx('favoriteTracks__main', favoritesPlaylist.length === 0 ? 'favoriteTracks__empty' : '')}>
        {favoritesPlaylist.length === 0 &&
          <EmptyPlaylist
          title='Songs you like will appear here'
          text='Save songs by tapping the heart icon.'
          >
            <Link to='/search' className="emptyPlaylistBtn">Find Songs</Link>
          </EmptyPlaylist>}
        {favoritesPlaylist.length > 0 && <MainContent favoritesPlaylist={favoritesPlaylist}/>}
        <div className="favoriteTracks__main__background" />
      </div>
    </div>
  )
}

export default Tracks