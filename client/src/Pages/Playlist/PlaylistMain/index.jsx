import React, { useState } from 'react'
import PlaylistMainSearchSongs from '@/Pages/Playlist/PlaylistMain/PlaylistMainSearchSongs'
import SongList from '@/Pages/Playlist/PlaylistMain/SongList'
import '@/Pages/Playlist/PlaylistMain/PlaylistMain.scss'

function PlaylistMain({ playlist, validUser, playlistId, bgColor }) {
  const [show, setShow] = useState(true)
  const showPlaylist = playlist.addedSongs.length > 0 && show
  
  return (
    <section className='playlist__main'>
      <div className="playlist__main__content">
        {showPlaylist && <SongList playlist={playlist}/>}
        <PlaylistMainSearchSongs
          show={show}
          setShow={setShow}
          playlistId={playlistId}
        />
      </div>
      <div className="playlist__main__background" style={{ backgroundColor: `#${bgColor}` }} />
    </section>
  )
}

export default PlaylistMain