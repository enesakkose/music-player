import React from 'react'
import SongsTableList from '@/components/SongsTableList'

function SongsList({song, findSongs, index}) {
  return (
    <SongsTableList song={song} index={index} findSongs={findSongs}/>
  )
}

export default SongsList