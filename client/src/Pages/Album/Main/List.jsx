import React from 'react'
import TrackList from '@/components/TrackList'
import Row from '@/components/TrackList/Row'

function List({ songs }) {
  const filteredSongs = songs.filter(f => f.hub.actions)

  return (
    <TrackList>
      {filteredSongs.map((song, index) => (
        <Row
          song={song}
          songs={filteredSongs}
          index={index}
          key={song.key}
        />
      ))}
    </TrackList>
  )
}

export default List