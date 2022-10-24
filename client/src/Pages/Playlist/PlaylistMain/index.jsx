import React, { useState } from 'react'
import PlaylistMainSongList from '@/Pages/Playlist/PlaylistMain/PlaylistMainSongList'
import PlaylistMainSearchSongs from '@/Pages/Playlist/PlaylistMain/PlaylistMainSearchSongs'
import { useSelector } from 'react-redux'
import '@/Pages/Playlist/PlaylistMain/PlaylistMain.scss'

function PlaylistMain({ playlistId, bgColor }) {
  const [show, setShow] = useState(true)

  return (
    <section className={`playlist__main`}>
      <div className="playlist__main__content">
        <PlaylistMainSongList playlistId={playlistId} show={show} />
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