import React from 'react'
import { closeModalHandle } from '@/utils'
import { deletePlaylist } from '@/store/playlist'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '@/modals/PlaylistDeleteModal.scss'

function PlaylistDeleteModal({data: playlistInfo, outClickRef}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const deletePlaylistHandle = async() => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    dispatch(deletePlaylist(playlistInfo.id))
    navigate('collection/playlists', { replace: true })
    closeModalHandle()
  }
  
  return (
    <div ref={outClickRef} className='playlistDeleteModal'>
      <h4 className='playlistDeleteModal__title'>
        Delete {playlistInfo.name}?
      </h4>
      <div className="playlistDeleteModal__actionBtns">
        <button onClick={() => closeModalHandle()} className='cancel'>
          CANCEL
        </button>
        <button onClick={deletePlaylistHandle} className='delete'>
          DELETE
        </button>
      </div>
    </div>
  )
}

export default PlaylistDeleteModal