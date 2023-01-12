import React from 'react'
import styles from '@/Pages/Album/Album.module.scss'
import Header from '@/components/Playlist/Header'

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