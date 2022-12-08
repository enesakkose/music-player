import React from 'react'
import SongsTableList from '@/components/SongsTableList'
import DateAndRemoveBtn from '@/Pages/Playlist/PlaylistMain/SongList/List/DateAndRemoveBtn'
import '@/Pages/Playlist/PlaylistMain/SongList/List/List.scss'

function List({ addedSongs, playlistId }) {
  return (
    <ul className='songList'>
      {addedSongs.map((song, index) => (
        <li key={song.track.key} className='songList__item'>
          <SongsTableList
            index={index}
            song={song.track}
            findSongs={addedSongs}
            className='songList__item__content'
          >
            <DateAndRemoveBtn song={song} addedSongs={addedSongs} playlistId={playlistId}/>
          </SongsTableList>
        </li>
      ))}
    </ul>
  )
}

export default List