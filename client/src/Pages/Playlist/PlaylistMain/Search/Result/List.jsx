import React from 'react'
import Row from '@/components/TrackList/Row'
import TrackList from '@/components/TrackList'
import LightBtn from '@/components/LightBtn'
import { removeFromAddedSongs } from '@/firebase/db'
import { addToPlaylist } from '@/utils/song'
import '@/Pages/Playlist/PlaylistMain/Search/Result/List.scss'

function List({ result, isSuccess, isFetching, playlist, show }) {
  const resultSong = show ? [] : result?.tracks?.hits?.slice(1,11)

  return (
    <TrackList className='resultTrackList'>
      {isSuccess && !isFetching && resultSong.map((song,index) => (
        <Row
          key={song.track.key}
          index={index}
          song={song.track}
          songs={resultSong}
          actionBtns={false}
          className='resultTrackList__item'
        >
          <LightBtn
            text='Add'
            onClick={() => addToPlaylist(playlist.id, song.track)}
            className='addToPlaylistBtn'
          />
        </Row>
      ))}
    </TrackList>
  )
}

export default List