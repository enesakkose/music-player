import React from 'react'
import EmptyPlaylist from '@/components/EmptyPlaylist'
import FavoritesCard from '@/components/FavoritesCard'
import PlaylistInfoCard from '@/components/PlaylistInfoCard'
import { addPlaylistHandle } from '@/utils'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'
import '@/Pages/Collection/Playlists.scss'

function Playlists() {

  const { playlists } = useSelector(state => state.playlist)

  const handleAdd = () => {
    addPlaylistHandle({
      name: `My Playlist #${playlists.length + 1}`,
      id : uuidv4()
    })
  }
  
  return (
    <div className='playlists contentSpacing'>
      { playlists.length === 0 
        ? <div className="playlists__empty">
            <EmptyPlaylist 
            title='Create your first playlist'
            text="It's easy, we'll help you."
            >
              <button onClick={handleAdd} className='emptyPlaylist-btn'>
                Create Playlist
              </button>
            </EmptyPlaylist>  
          </div>

        : <div className="playlists__cards">
            <FavoritesCard/>
            {playlists.map((playlist) => (
              <PlaylistInfoCard key={playlist.id} playlist={playlist} />
            ))}
          </div>  
      }
    </div>
  )
}

export default Playlists