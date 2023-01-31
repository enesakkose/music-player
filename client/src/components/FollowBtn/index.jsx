import React from 'react'
import styles from '@/components/FollowBtn/FollowBtn.module.scss'

function FollowBtn({ followers, ...props }) {
  return (
    <button className={styles.followBtn} {...props}>
      {followers ? 'Unfollow' : 'Follow'}
    </button>
  )
}

export default FollowBtn