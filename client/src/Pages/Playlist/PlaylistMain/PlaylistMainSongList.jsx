import React from 'react'
import ActionBtns from '@/components/ActionBtns'
import SongsTableHeader from '@/components/SongsTableHeader'
import SongsTableList from '@/components/SongsTableList'
import Icon from '@/components/Icon'
import moment from 'moment'
import { addOrRemoveAddedSongs } from '@/firebase/db'
import { useFindPlaylist } from '@/hooks/useFindPlaylist'
import { modal } from '@/utils'

function PlaylistMainSongList({ show, playlistId }) {
  const findPlaylist = useFindPlaylist(playlistId)
  const showPlaylist = findPlaylist?.addedSongs?.length > 0 && show
  const onlyTracks = findPlaylist?.addedSongs?.length > 0 && findPlaylist.addedSongs.map((a => a.track))

  const removeSong = async(key) => {
    await addOrRemoveAddedSongs(playlistId, {id: key}, findPlaylist?.addedSongs)
  }

  const commentModal = () => {
    modal('CommentModal')
  }
  
  return (
    <>
    {showPlaylist && <div className="playlist__main__content__songsList">
      <ActionBtns className='playlistActBtns' findSongs={onlyTracks}>
        <button onClick={commentModal} className='commentBtn'>
          <Icon name='Comment' size={25}/>
        </button>
      </ActionBtns>
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