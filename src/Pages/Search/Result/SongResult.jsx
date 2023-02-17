import React from 'react'
import TrackList from '@/components/TrackList'
import Row from '@/components/TrackList/Row'

function SongResult({ songs }) {
  return (
    <div className="songResult">
      <h3>Songs</h3>
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