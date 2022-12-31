import React from 'react'
import { closeModalHandle } from '@/utils'
import { deletePlaylist } from '@/firebase/db'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '@/modals/PlaylistDeleteModal.scss'

function PlaylistDeleteModal({data: playlistInfo, outClickRef}) {
  const navigate = useNavigate()

  const deletePlaylistHandle = async(id) => {
    await deletePlaylist(id)
    closeModalHandle()
    navigate('collection/playlists', { replace: true })
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
        <button onClick={() => deletePlaylistHandle(playlistInfo.id)} className='delete'>
          DELETE
        </button>
      </div>
    </div>
  )
}

export default PlaylistDeleteModal