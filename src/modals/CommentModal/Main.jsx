import React, { useRef } from 'react'
import Comment from '@/components/UI/Modal/Comment'
import EmptyField from '@/components/EmptyField'
import ScrollWrapper from '@/components/Wrappers/ScrollWrapper'
import CommentModalForm from '@/modals/CommentModal/CommentModalForm'
import { useGetComments } from '@/utils/hooks/useGetComments'
import { useScrollEnd } from '@/utils/hooks/useScroll'
import styles from '@/modals/CommentModal/CommentModal.module.scss'

function Main({ playlist }) {
  const containerRef = useRef(null)
  const scrollEnd = useScrollEnd(containerRef)
  const comments = useGetComments(playlist.id, scrollEnd, playlist.commentsCount)

  return (
    <div className={styles.main}>
      <div ref={containerRef} className={styles.list}>
        <ScrollWrapper>
          {comments?.map((comment) => (<Comment key={comment.data().id} comment={comment.data()} />))}
        </ScrollWrapper>
        {comments?.length === 0 && <EmptyField icon='Comment' />}
      </div>
      <CommentModalForm playlistId={playlist.id} ref={containerRef} />
    </div>
  )
}

export default Main