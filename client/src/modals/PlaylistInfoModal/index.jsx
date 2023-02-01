import React from 'react'
import ModalWrapper from '@/components/Wrappers/ModalWrapper'
import Header from '@/components/Modal/Header'
import Form from '@/modals/PlaylistInfoModal/Form'

function PlaylistInfoModal({ data: playlistInfo, outClickRef }) {
  return (
    <ModalWrapper ref={outClickRef}>
      <Header title='Edit Details'/>
      <Form playlistInfo={playlistInfo}/>
    </ModalWrapper>
  )
}

export default PlaylistInfoModal