import React from 'react'
import SongsTableList from '@/components/SongsTableList'
import DateAndRemoveBtn from '@/Pages/Playlist/PlaylistMain/SongList/List/DateAndRemoveBtn'
import '@/Pages/Playlist/PlaylistMain/SongList/List/List.scss'

function List({ playlist }) {
  return (
    <ul className='songList'>
      {playlist.addedSongs.map((song, index) => (
        <li key={song.track.key} className='songList__item'>
          <SongsTableList
            index={index}
            song={song.track}
            findSongs={playlist.addedSongs}
            className='songList__item__content'
          >
            <DateAndRemoveBtn song={song} playlist={playlist}/>
          </SongsTableList>
        </li>
      ))}
    </ul>
  )
}

export default List