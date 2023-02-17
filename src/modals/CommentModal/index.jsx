import React from 'react'
import ModalWrapper from '@/components/Wrappers/ModalWrapper'
import Header from '@/components/UI/Modal/Header'
import Main from '@/modals/CommentModal/Main'
import { useGetPlaylist } from '@/utils/hooks/useGetPlaylist'

function CommentModal({ outClickRef, data: playlistId }) {
  const playlist = useGetPlaylist(playlistId)

  if (playlist === null) return

  return (
    <ModalWrapper ref={outClickRef}>
      <Header title='Comments' />
      <Main playlist={playlist} />
    </ModalWrapper>
  )
}

export default CommentModal