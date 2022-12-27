import React from 'react'
import ModalWrapper from '@/components/Wrappers/ModalWrapper'
import ModalHeader from '@/components/Modal/ModalHeader'
import Form from '@/modals/PlaylistInfoModal/Form'
import '@/modals/PlaylistInfoModal/PlaylistInfoModal.scss'

function PlaylistInfoModal({ data: playlistInfo, outClickRef }) {
  return (
    <ModalWrapper ref={outClickRef} className='playlistInfoModal'>
      <ModalHeader title='Edit Details' />
      <Form playlistInfo={playlistInfo}/>
    </ModalWrapper>
  )
}

export default PlaylistInfoModal