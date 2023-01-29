import React from 'react'
import SongsTableHeader from '@/components/SongsTableHeader'
import TrackList from '@/components/TrackList'
import Row from '@/components/TrackList/Row'

function List({ size, songs }) {
  const filteredSongs = songs.filter(f => f.hub.actions)

  return (
    <>
      {!size && <SongsTableHeader/>}
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
    </>
  )
}

export default List