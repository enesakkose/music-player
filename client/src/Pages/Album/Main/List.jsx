import React from 'react'
import SongsTableHeader from '@/components/SongsTableHeader'
import Song from '@/components/SongsTableList'
import styles from '@/Pages/Album/Main/List.module.scss'

function List({ size, songs }) {
  const filteredSongs = songs.filter(f => f.hub.actions)

  return (
    <>
      {!size && <SongsTableHeader/>}
      <div className={styles.list}>
        {filteredSongs.map((song, index) => (
          <Song
            song={song}
            findSongs={filteredSongs}
            index={index}
            key={song.key}
          />
        ))}
      </div>
    </>
  )
}

export default List