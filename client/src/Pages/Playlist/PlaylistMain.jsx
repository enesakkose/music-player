import React, { useState } from 'react'
import PlaylistMainSongList from '@/Pages/Playlist/Main/PlaylistMainSongList'
import PlaylistMainSearchSongs from '@/Pages/Playlist/Main/PlaylistMainSearchSongs'
import '@/Pages/Playlist/PlaylistMain.scss'

function PlaylistMain({playlistId}) {
  const [show, setShow] = useState(true)

  return (
    <section className={`playlist__main ${show ? 'x': ''}`}>
      <div className="playlist__main__content">
        <PlaylistMainSongList playlistId={playlistId} show={show}/>
        <PlaylistMainSearchSongs show={show} setShow={setShow}/>
      </div>
      <div className="playlist__main__background"/>
    </section>
  )
}

export default PlaylistMain