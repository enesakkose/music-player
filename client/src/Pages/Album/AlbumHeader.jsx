import React from 'react'
import PlaylistHeader from '@/components/PlaylistHeader'

function AlbumHeader({findAlbum, findSongs}) {
  return (
    <PlaylistHeader className='album__header'>
      <div className="album__header__cover cover">
        <img src={findAlbum.links.images[0].url} alt="img" />
      </div>
      <div className="album__header__info info">
        <h6>SINGLE</h6>
        <h1 className="album__header__info__albumName">
          {findAlbum.name.substr(0,15)}
        </h1>
        <h6 className='album__header__info__singer'>
          {findAlbum.author.toUpperCase()} •
          <span> {findSongs.length} Songs</span> 
        </h6>
      </div>
    </PlaylistHeader>
  )
}

export default AlbumHeader