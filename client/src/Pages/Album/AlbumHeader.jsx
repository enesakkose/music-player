import React from 'react'
import PlaylistHeader from '@/components/PlaylistHeader'

function AlbumHeader({findAlbum, findSongs, backgroundColor}) {
  return (
    <PlaylistHeader 
      className='album__header' 
      style={{ backgroundColor: `#${backgroundColor}`}}
      img={findAlbum?.images?.background}
      infoTitle='SINGLE'
      infoHeader={findAlbum?.title}
    >
      <h6 className='album__header__singer'>
        {findAlbum?.subtitle?.toUpperCase()} •
        <span> {findSongs.length} Songs</span> 
      </h6>
    </PlaylistHeader>
  )
}

export default AlbumHeader