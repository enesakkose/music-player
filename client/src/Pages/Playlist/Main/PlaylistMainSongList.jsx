import React from 'react'
import ActionBtns from '@/components/ActionBtns'
import SongsTableHeader from '@/components/SongsTableHeader'
import SongsTableList from '@/components/SongsTableList'
import { setPlaylist } from '@/store/playlist'
import { useSelector } from 'react-redux'

function PlaylistMainSongList({ show, playlistId }) {
  const { playlist } = useSelector(state => state.playlist)
  const showPlaylist = playlist.length > 0 && show

  const addPlaylist = (song) => {
    dispatch(setPlaylist({
      id: playlistId,
      track: song 
    }))
  }

  return (
    <>
    {showPlaylist && <div className="playlist__main__content__songsList">
      <ActionBtns findSongs={playlist}/>
      <SongsTableHeader className='playlist__main__content__songsList__header'/>
      <ul className='playlist__main__content__songsList__items'>
        {playlist.map((song, index) => (
          <li key={song.track.key} className='playlist__main__content__songsList__items__item'>
            <SongsTableList
              index={index}
              song={song.track}
              findSongs={playlist}
            >
              <button onClick={() => addPlaylist(song.track)} className='addOrRemove'>
                Remove
              </button>
            </SongsTableList>
          </li>
        ))}
      </ul>
  </div>}
  </>
  )
}

export default PlaylistMainSongList