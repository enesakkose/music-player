import React from 'react'
import Row from '@/components/TrackList/Row'
import TrackList from '@/components/TrackList'
import moment from 'moment'
import '@/Pages/Playlist/PlaylistMain/SongList/List/List.scss'

function List({ playlist }) {
  return (
    <TrackList className='songList'>
      {playlist.addedSongs.map((song, index) => (
          <Row
            key={song.id}
            index={index}
            song={song.track}
            songs={playlist.addedSongs}
            className='songList__item'
          >
            <span>{moment(song.createdAt).fromNow()}</span>
          </Row>
      ))}
    </TrackList>
  )
}

export default List