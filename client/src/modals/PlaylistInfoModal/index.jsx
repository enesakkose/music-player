import React from 'react'
import ModalWrapper from '@/components/Wrappers/ModalWrapper'
import ModalHeader from '@/components/Modal/ModalHeader'
import Form from '@/modals/PlaylistInfoModal/Form'

function PlaylistInfoModal({ data: playlistInfo, outClickRef }) {
  return (
    <ModalWrapper ref={outClickRef}>
      <ModalHeader title='Edit Details' />
      <Form playlistInfo={playlistInfo}/>
    </ModalWrapper>
  )
}

export default PlaylistInfoModal