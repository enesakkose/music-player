import React from 'react'
import TrackList from '@/components/TrackList'
import Row from '@/components/TrackList/Row'
import SongsTableHeader from '@/components/SongsTableHeader'
import '@/Pages/Search/Result/SongResult.scss'

function SongResult({songs, size}) {
  return (
    <div className="songResult">
      <h3>Songs</h3>
      {!size && <SongsTableHeader/>}
      <TrackList>
        {songs.map((song, index) => (
          <Row
            key={song.track.key}
            index={index}
            song={song.track}
            songs={songs}
          />
        ))}
      </TrackList>
    </div>
  )
}

export default SongResult