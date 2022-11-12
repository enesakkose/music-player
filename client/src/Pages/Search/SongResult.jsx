import React from 'react'
import SongsTableHeader from '@/components/SongsTableHeader'
import SongsTableList from '@/components/SongsTableList'
import '@/Pages/Search/SongResult.scss'

function SongResult({songs}) {
  return (
    <>
    <div className="songResult">
      <h3>Songs</h3>
      <SongsTableHeader/>
      <div className="songResult__list">
        {songs.map((song, index) => (
          <SongsTableList
            key={song.track.key}
            index={index}
            song={song.track}
            findSongs={songs}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default SongResult