import React from 'react'
import EmptyPlaylist from '@/components/EmptyPlaylist'
import FavoritesCard from '@/components/FavoritesCard'
import PlaylistInfoCard from '@/components/PlaylistInfoCard'
import { addPlaylistHandle } from '@/firebase/db'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '@/Pages/Collection/Playlists.scss'

function Playlists() {
  const id = uuidv4()
  const navigate = useNavigate()
  const { playlists } = useSelector(state => state.playlist)
  const { user } = useSelector(state => state.auth)

  const handleAdd = async() => {
    await addPlaylistHandle(playlists, id, user.uid)
    navigate(`/playlist/${id}`, {replace: true})
  }
  
  return (
    <div className='playlists contentSpacing'>
      { playlists.length === 0 
        ? <div className="playlists__empty">
            <EmptyPlaylist 
            title='Create your first playlist'
            text="It's easy, we'll help you."
            >
              <button onClick={handleAdd} className='emptyPlaylistBtn'>
                Create Playlist
              </button>
            </EmptyPlaylist>  
          </div>

        : <div className="playlists__cards">
            <FavoritesCard/>
            {playlists.map((playlist) => (
              <PlaylistInfoCard key={playlist.id} playlist={playlist} user={user}/>
            ))}
          </div>  
      }
    </div>
  )
}

export default Playlists