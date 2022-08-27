import React from 'react'
import EmptyPlaylist from '@/components/EmptyPlaylist'
import InfoCard from '@/components/InfoCard'
import '@/Pages/Collection/Playlists.scss'

function Playlists() {
  return (
    <div className='playlists'>
        {/*<div className="playlists__empty">
        <EmptyPlaylist 
            title='Create your first playlist'
            text="It's easy, we'll help you."
        >
           <button className='emptyPlaylist-btn'>
             Create Playlist
           </button>
        </EmptyPlaylist>  
        </div>*/}
        <InfoCard/>
    </div>
  )
}

export default Playlists