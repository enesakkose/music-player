import React from 'react'
import EmptyPlaylist from '@/components/EmptyPlaylist'
import FavoritesCard from '@/components/FavoritesCard'
import InfoCard from '@/components/InfoCard'
import { useSelector } from 'react-redux'
import '@/Pages/Collection/Playlists.scss'

function Playlists() {

  const { playlists } = useSelector(state => state.playlist)
  
  return (
    <div className='playlists contentSpacing'>
        {playlists.length === 0 
        ? <div className="playlists__empty">
            <EmptyPlaylist 
            title='Create your first playlist'
            text="It's easy, we'll help you."
        >
           <button className='emptyPlaylist-btn'>
             Create Playlist
           </button>
            </EmptyPlaylist>  
          </div>

        : <div className="playlists__cards">
        <FavoritesCard/>
        {playlists.map((playlist) => (
          <InfoCard key={playlist.id} playlist={playlist} />
        ))}
        </div>  
      }
        
    </div>
  )
}

export default Playlists