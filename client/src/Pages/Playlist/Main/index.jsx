import React, { useState } from 'react'
import PlaylistMainSongList from '@/Pages/Playlist/Main/PlaylistMainSongList'
import PlaylistMainSearchSongs from '@/Pages/Playlist/Main/PlaylistMainSearchSongs'
import { useSelector } from 'react-redux'
import '@/Pages/Playlist/Main/PlaylistMain.scss'

function PlaylistMain({playlistId}) {
  const [show, setShow] = useState(true)
  const { playlist } = useSelector(state => state.playlist)
  const bgColor = playlist[0]?.track?.images?.joecolor?.slice(18,24)

  return (
    <section className={`playlist__main`}>
      <div className="playlist__main__content">
        <PlaylistMainSongList playlistId={playlistId} show={show}/>
        <PlaylistMainSearchSongs show={show} setShow={setShow}/>
      </div>
      <div className="playlist__main__background" style={{ backgroundColor: `#${bgColor}` }}/>
    </section>
  )
}

export default PlaylistMain