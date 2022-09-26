import React from 'react'
import PlaylistHeader from '@/components/PlaylistHeader'

function AlbumHeader({findAlbum, findSongs, backgroundColor}) {
  return (
    <PlaylistHeader className='album__header' style={{ backgroundColor: `#${backgroundColor}`}}>
      <div className="album__header__cover cover">
        <img src={findAlbum.images.background} alt="img" />
      </div>
      <div className="album__header__info info">
        <h6>SINGLE</h6>
        <h1 className="album__header__info__albumName">
          {findAlbum.title}
        </h1>
        <h6 className='album__header__info__singer'>
          {findAlbum.subtitle.toUpperCase()} •
          <span> {findSongs.length} Songs</span> 
        </h6>
      </div>
    </PlaylistHeader>
  )
}

export default AlbumHeader