import React, {useEffect} from 'react'
import ActionBtns from '@/components/ActionBtns'
import SongsTableHeader from '@/components/SongsTableHeader'
import SongsTableList from '@/components/SongsTableList'
import Icon from '@/components/Icon'
import moment from 'moment'
import { setPlaylist, removePlaylist } from '@/store/playlist'
import { useSelector, useDispatch } from 'react-redux'

function PlaylistMainSongList({ show, playlistId }) {
  const dispatch = useDispatch()
  const { playlist } = useSelector(state => state.playlist)
  const havePlaylist = playlist.filter(song => song.id === playlistId)
  const onlyTracks = havePlaylist.map((a => a.track))
  
  
  const removeSong = (key) => {
    dispatch(removePlaylist(key))
  }

  const showPlaylist = havePlaylist.length > 0 && show
  
  return (
    <>
    {showPlaylist && <div className="playlist__main__content__songsList">
      <ActionBtns findSongs={onlyTracks}/>
      <SongsTableHeader className='playlist__main__content__songsList__header'>
        <h5>Date Added</h5>
      </SongsTableHeader>
      <ul className='playlist__main__content__songsList__items'>
        {havePlaylist.map((song, index) => (
          <li key={song.track.key} className='playlist__main__content__songsList__items__item'>
            <SongsTableList
              index={index}
              song={song.track}
              findSongs={playlist}
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