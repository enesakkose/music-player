import React from 'react'
import ActionBtns from '@/components/ActionBtns'
import SongsTableHeader from '@/components/SongsTableHeader'
import SongsTableList from '@/components/SongsTableList'
import Icon from '@/components/Icon'
import Loading from '@/components/Loading'
import moment from 'moment'
import { removeSongToPlaylist } from '@/firebase/db'
import { useSelector, useDispatch } from 'react-redux'

function PlaylistMainSongList({ show, playlistId }) {
  const { playlists } = useSelector(state => state.playlist)
  if(playlists.length < 1) return <Loading/>

  const findPlaylist = playlists.find(playlist => playlist.id === playlistId)
  const showPlaylist = findPlaylist?.addedSongs?.length > 0 && show
  const onlyTracks = findPlaylist?.addedSongs?.length > 0 && findPlaylist.addedSongs.map((a => a.track))

  const removeSong = async(key) => {
    await removeSongToPlaylist(playlistId, key, findPlaylist?.addedSongs)
  }
  
  return (
    <>
    {showPlaylist && <div className="playlist__main__content__songsList">
      <ActionBtns findSongs={onlyTracks}/>
      <SongsTableHeader className='playlist__main__content__songsList__header'>
        <h5>Date Added</h5>
      </SongsTableHeader>
      <ul className='playlist__main__content__songsList__items'>
        {findPlaylist.addedSongs.map((song, index) => (
          <li key={song.track.key} className='playlist__main__content__songsList__items__item'>
            <SongsTableList
              index={index}
              song={song.track}
              findSongs={findPlaylist.addedSongs}
              className='playlist__main__content__songsList__items__item__content'
            >
              <div className='playlist__main__content__songsList__items__item__content__dateAdded'>
                <span>{moment(song.createdAt).fromNow()}</span>
                <button 
                  onClick={() => removeSong(song.track.key)} 
                  className='remove'
                >
                  <Icon name='Remove' size={21}/>
                </button>
              </div>
            </SongsTableList>
          </li>
        ))}
      </ul>
  </div>}
  </>
  )
}

export default PlaylistMainSongList