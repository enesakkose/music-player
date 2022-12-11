import React from 'react'
import SongsTableList from '@/components/SongsTableList'
import AddOrRemoveBtn from '@/Pages/Playlist/PlaylistMain/Search/Result/AddOrRemoveBtn'
import { addOrRemoveAddedSongs } from '@/firebase/db'
import '@/Pages/Playlist/PlaylistMain/Search/Result/List.scss'

function List({ result, isSuccess, isFetching, playlist }) {
  const resultSong = result?.tracks?.hits?.slice(1,11)

  const addOrRemove = (song) => {
    addOrRemoveAddedSongs(playlist.id, {
      id: song.key,
      track: song,
      createdAt: new Date().toISOString()
    }, playlist.addedSongs)
  }

  return (
    <div className='resultList'>
      {isSuccess && !isFetching && resultSong.map((song,index) => (
        <SongsTableList
          key={song.track.key}
          index={index}
          song={song.track}
          findSongs={resultSong}
          className='resultList__item'
        >
          <AddOrRemoveBtn 
            onClick={() => addOrRemove(song.track)}
            id={song.track.key}
            playlist={playlist}
          />
        </SongsTableList>
      ))}
    </div>
  )
}

export default List