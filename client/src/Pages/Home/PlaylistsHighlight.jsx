import React from 'react'
import PlaylistInfoCard from '@/components/PlaylistInfoCard'
import { Link } from 'react-router-dom'

function PlaylistsHighlight({playlists}) {
  return (
    <div className='playlistsHighlight'>
      <div className="playlistsHighlight__title">
        <h3>Your Playlists</h3>
        <Link to='/collection/playlists'>See All</Link>
      </div>
      <ul className='homeList'>
        {playlists.map((playlist) => (
          <li key={playlist.id} className='homeListItem'>
            <PlaylistInfoCard 
              playlist={playlist}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PlaylistsHighlight