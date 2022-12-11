import React, { useState } from 'react'
import PlaylistSearch from '@/Pages/Playlist/PlaylistMain/Search'
import SongList from '@/Pages/Playlist/PlaylistMain/SongList'
import '@/Pages/Playlist/PlaylistMain/PlaylistMain.scss'

function PlaylistMain({ playlist, validUser,bgColor }) {
  const [show, setShow] = useState(true)
  const showPlaylist = playlist.addedSongs.length > 0 && show
  
  return (
    <section className='playlist__main'>
      <div className="playlist__main__content">
        {showPlaylist && <SongList playlist={playlist}/>}
        {validUser && <PlaylistSearch
          playlist={playlist}
          show={show}
          setShow={setShow}
        />}
      </div>
      <div className="playlist__main__background" style={{ backgroundColor: `#${bgColor}` }} />
    </section>
  )
}

export default PlaylistMain