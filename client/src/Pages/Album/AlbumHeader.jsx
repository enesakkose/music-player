import React from 'react'
import PlaylistHeader from '@/components/PlaylistHeader'
import styles from '@/Pages/Album/Album.module.scss'

function AlbumHeader({ findAlbum, findSongs, backgroundColor, scrollTop }) {
  return (
    <PlaylistHeader 
      className={styles.header} 
      style={{ backgroundColor: `#${backgroundColor}`}}
      img={findAlbum?.images?.background}
      infoTitle='SINGLE'
      infoHeader={findAlbum?.title}
      scrollTop={scrollTop}
      bg={backgroundColor}
    >
      <div className={styles.singer}>
        <h6>{findAlbum?.subtitle?.toUpperCase()}</h6>
        <span> • {findSongs.length} Songs</span> 
      </div>
    </PlaylistHeader>
  )
}

export default AlbumHeader