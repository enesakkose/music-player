import React from 'react'
import ModalWrapper from '@/components/Wrappers/ModalWrapper'
import LightBtn from '@/components/LightBtn'
import { closeModalHandle } from '@/utils'
import { deletePlaylist } from '@/firebase/db'
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
        <LightBtn
          text='CANCEL'
          onClick={() => closeModalHandle()}
        />
        <LightBtn
          className={styles.delete}
          text='DELETE'
          onClick={() => deletePlaylistHandle(playlistInfo.id)}
        />
      </div>
    </ModalWrapper>
  )
}

export default PlaylistDeleteModal