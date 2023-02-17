import React from 'react'
import Row from '@/components/TrackList/Row'
import TrackList from '@/components/TrackList'
import Button from '@/components/UI/Button'
import { addToCustomPlaylist } from '@/utils/helpers/playlist'

function List({ result, playlist, show }) {
  const resultSong = show ? [] : result?.tracks?.hits?.slice(1, 11)

  return (
    <TrackList>
      {resultSong.map((song, index) => (
        <Row
          key={song.track.key}
          index={index}
          song={song.track}
          songs={resultSong}
          actionBtns={false}
        >
          <Button
            variant='outline'
            onClick={() => addToCustomPlaylist(playlist.id, song.track)}
          >
            Add
          </Button>
        </Row>
      ))}
    </TrackList>
  )
}

export default List