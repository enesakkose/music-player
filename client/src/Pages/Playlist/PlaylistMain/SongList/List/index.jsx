import React from 'react'
import Row from '@/components/TrackList/Row'
import TrackList from '@/components/TrackList'
import DateAndRemoveBtn from '@/Pages/Playlist/PlaylistMain/SongList/List/DateAndRemoveBtn'
import '@/Pages/Playlist/PlaylistMain/SongList/List/List.scss'

function List({ playlist }) {
  return (
    <TrackList className='songList'>
      {playlist.addedSongs.map((song, index) => (
          <Row
            key={song.track.key}
            index={index}
            song={song.track}
            songs={playlist.addedSongs}
            className='songList__item'
          >
            <DateAndRemoveBtn song={song} playlist={playlist}/>
          </Row>
      ))}
    </TrackList>
  )
}

export default List