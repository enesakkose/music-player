import React from 'react'
import Avatar from '@/components/Avatar'
import Button from '@/components/UI/Button'
import { useNavigate } from 'react-router-dom'
import { getTime } from '@/utils/helpers/number'
import { closeModalHandle } from '@/utils/helpers'
import { useGetProfile } from '@/utils/hooks/useGetProfile'
import styles from '@/components/UI/Modal/Comment/Comment.module.scss'

function Comment({ comment, ...props }) {
  const navigate = useNavigate()
  const time = getTime(comment.createdAt)
  const profile = useGetProfile(comment.uid)

  if (profile === null) return

  const commentNavBtn = () => {
    navigate(`profile/${comment.uid}`)
    closeModalHandle()
  }

  return (
    <div className={styles.commentContainer} {...props}>
      <Avatar src={profile?.photoURL} size='2rem' />
      <div className={styles.content}>
        <div className={styles.title}>
          <Button hover='h-secondary' onClick={commentNavBtn}>
            {profile?.displayName}
          </Button>
          <span>• {time}</span>
        </div>
        <p className={styles.comment}>{comment.comment}</p>
      </div>
    </div>
  )
}

export default Comment