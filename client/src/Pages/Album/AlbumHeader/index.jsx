import React from 'react'
import Header from '@/components/Playlist/Header'
import styles from '@/Pages/Album/AlbumHeader/AlbumHeader.module.scss'

function AlbumHeader({ album, songs, backgroundColor, scrollTop }) {
  return (
    <Header 
      className={styles.header} 
      style={{ backgroundColor: `#${backgroundColor}`}}
      img={album?.images?.background}
      type='SINGLE'
      title={album?.title}
      scrollTop={scrollTop}
      bg={backgroundColor}
    >
      <div className={styles.singer}>
        <h6>{album?.subtitle?.toUpperCase()}</h6>
        <span> • {songs.length} Songs</span> 
      </div>
    </Header>
  )
}

export default AlbumHeader