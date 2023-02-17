import React from 'react'
import HeaderBtns from '@/Pages/Playlist/Main/SongList/HeaderBtns'
import List from '@/Pages/Playlist/Main/SongList/List'

function SongList({ playlist }) {
  return (
    <div className='songList'>
      <HeaderBtns playlist={playlist}/>
      <List playlist={playlist}/>
    </div>
  )
}

export default SongList