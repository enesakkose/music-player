import React from 'react'
import Row from '@/components/TrackList/Row'
import TrackList from '@/components/TrackList'
import DropdownMenuItem from '@/components/UI/DropdownMenu/DropdownMenuItem'
import moment from 'moment'
import { removeFromAddedSongs } from '@/firebase/db'
import styles from '@/Pages/Playlist/Main/SongList/List/List.module.scss'

function List({ playlist }) {

  const CustomPlaylistDropdownItem = ({ song }) => {
    return (
      <DropdownMenuItem
        text='Remove from playlist'
        onClick={() => removeFromAddedSongs(playlist.id, song)}
      />
    )
  }

  //This component only have customPlaylist

  return (
    <TrackList className={styles.list}>
      {playlist.addedSongs.map((song, index) => (
        <Row
          key={song.id}
          index={index}
          song={song.track}
          songs={playlist.addedSongs}
          customDropdownItem={<CustomPlaylistDropdownItem song={song} />}
          playlistId={playlist.id}
          className={styles.row}
        >
          <span>{moment(song.createdAt).fromNow()}</span>
        </Row>
      ))}
    </TrackList>
  )
}

export default List