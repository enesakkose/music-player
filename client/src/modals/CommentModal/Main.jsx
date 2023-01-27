import React, { useRef } from 'react'
import Comment from '@/components/Modal/Comment'
import EmptyField from '@/components/EmptyField'
import CommentModalForm from '@/modals/CommentModal/CommentModalForm'
import { useGetComments } from '@/hooks/useGetComments'
import { useSelector } from 'react-redux'
import { useScrollEnd } from '@/hooks/useScroll'
import styles from '@/modals/CommentModal/CommentModal.module.scss'

function Main({ playlist }) {
  const { profile: { uid } } = useSelector(state => state.profiles)
  const containerRef = useRef(null)
  const scrollEnd = useScrollEnd(containerRef)
  const comments = useGetComments(playlist.id, uid, scrollEnd, playlist.commentsCount)

  return (
    <div className={styles.main}>
      <div ref={containerRef} className={styles.list}>
        {comments?.map((comment) => ( <Comment key={comment.data().id} comment={comment.data()}/> ))}
        {comments?.length === 0 && <EmptyField icon='Comment'/>}
      </div>
      <CommentModalForm playlistId={playlist.id} ref={containerRef}/>
    </div>
  )
}

export default Main