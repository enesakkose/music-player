import React from 'react'
import ModalWrapper from '@/components/Wrappers/ModalWrapper'
import ModalHeader from '@/components/Modal/ModalHeader'
import Main from '@/modals/CommentModal/Main'
import { useGetPlaylist } from '@/hooks/useGetPlaylist'

function CommentModal({ outClickRef, data: playlistId }) {
  const playlist = useGetPlaylist(playlistId)
  
  if(playlist === null) return 

  return (
    <ModalWrapper ref={outClickRef}>
      <ModalHeader title='Comments'/>
      <Main playlist={playlist}/>
    </ModalWrapper>
  )
}

export default CommentModal