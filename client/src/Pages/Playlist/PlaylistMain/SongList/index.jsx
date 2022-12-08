import React from 'react'
import HeaderBtns from '@/Pages/Playlist/PlaylistMain/SongList/HeaderBtns'
import List from '@/Pages/Playlist/PlaylistMain/SongList/List'
import SongsTableHeader from '@/components/SongsTableHeader'

function SongList({playlist}) {
  return (
    <div className='songList'>
      <HeaderBtns playlist={playlist}/>
      <SongsTableHeader><h5>Date Added</h5></SongsTableHeader>
      <List addedSongs={playlist.addedSongs} playlistId={playlist.id}/>
    </div>
  )
}

export default SongList