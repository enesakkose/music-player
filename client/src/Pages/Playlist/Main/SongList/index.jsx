import React from 'react'
import HeaderBtns from '@/Pages/Playlist/Main/SongList/HeaderBtns'
import List from '@/Pages/Playlist/Main/SongList/List'
import SongsTableHeader from '@/components/SongsTableHeader'

function SongList({ playlist, size }) {
  return (
    <div className='songList'>
      <HeaderBtns playlist={playlist} size={size}/>
      {!size && <SongsTableHeader/>}
      <List playlist={playlist}/>
    </div>
  )
}

export default SongList