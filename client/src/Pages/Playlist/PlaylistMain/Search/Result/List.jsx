import React from 'react'
import Row from '@/components/TrackList/Row'
import TrackList from '@/components/TrackList'
import AddOrRemoveBtn from '@/Pages/Playlist/PlaylistMain/Search/Result/AddOrRemoveBtn'
import { addToAddedSongs, removeFromAddedSongs } from '@/firebase/db'
import '@/Pages/Playlist/PlaylistMain/Search/Result/List.scss'

function List({ result, isSuccess, isFetching, playlist, show }) {
  const resultSong = show ? [] : result?.tracks?.hits?.slice(1,11)

  const addOrRemove = (song) => {
    const findAddedSongs = playlist.addedSongs.find(s => s.id === song.key)

    findAddedSongs 
    ? removeFromAddedSongs(playlist.id, findAddedSongs)
      
    : addToAddedSongs(playlist.id, {
        id: song.key,
        track: song,
        createdAt: new Date().toISOString()
      })
  }

  return (
    <TrackList className='resultTrackList'>
      {isSuccess && !isFetching && resultSong.map((song,index) => (
        <Row
          key={song.track.key}
          index={index}
          song={song.track}
          songs={resultSong}
          className='resultTrackList__item'
        >
          <AddOrRemoveBtn 
            onClick={() => addOrRemove(song.track)}
            id={song.track.key}
            playlist={playlist}
          />
        </Row>
      ))}
    </TrackList>
  )
}

export default List