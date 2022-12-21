import React from 'react'
import ModalWrapper from '@/components/Wrappers/ModalWrapper'
import ModalHeader from '@/components/Modal/ModalHeader'
import CommentList from '@/modals/CommentModal/List'
import CommentModalForm from '@/modals/CommentModal/CommentModalForm'
import { useGetPlaylist } from '@/hooks/useGetPlaylist'
import '@/modals/CommentModal/CommentModal.scss'

function CommentModal({ outClickRef, data: playlistId }) {
  const findPlaylist = useGetPlaylist(playlistId)
  
  if(findPlaylist === null) return 

  return (
    <ModalWrapper ref={outClickRef} className='commentModal'>
      <ModalHeader title='Comments'/>
      <section className='commentModal__main'>
        <CommentList findPlaylist={findPlaylist}/>
        <CommentModalForm playlistId={playlistId}/>
      </section>
    </ModalWrapper>
  )
}

export default CommentModal