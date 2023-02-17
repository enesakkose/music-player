import React from 'react'
import ModalWrapper from '@/components/Wrappers/ModalWrapper'
import Button from '@/components/UI/Button'
import { closeModalHandle } from '@/utils/helpers'
import { deletePlaylist } from 'firebase/db'
import { useNavigate } from 'react-router-dom'
import styles from '@/modals/PlaylistDeleteModal/PlaylistDeleteModal.module.scss'

function PlaylistDeleteModal({ data: playlistInfo, outClickRef }) {
  const navigate = useNavigate()

  const deletePlaylistHandle = async (id) => {
    navigate('collection/playlists', { replace: true })
    await deletePlaylist(id)
    closeModalHandle()
  }

  return (
    <ModalWrapper ref={outClickRef} className={styles.playlistDeleteModal}>
      <h4 className={styles.title}>
        Delete {playlistInfo.name}?
      </h4>
      <div className={styles.actionBtns}>
        <Button variant='contained' color='primary' onClick={() => closeModalHandle()}>
          CANCEL
        </Button>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => deletePlaylistHandle(playlistInfo.id)}
        >
          DELETE
        </Button>
      </div>
    </ModalWrapper>
  )
}

export default PlaylistDeleteModal