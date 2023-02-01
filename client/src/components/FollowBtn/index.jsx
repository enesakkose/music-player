import React from 'react'
import Button from '@/components/Button'
import LightBtn from '@/components/LightBtn'
import styles from '@/components/FollowBtn/FollowBtn.module.scss'

function FollowBtn({ followers, ...props }) {
  return (
    <LightBtn text={followers ? 'Unfollow' : 'Follow'} className={styles.followBtn} {...props}/>
      
  )
}

export default FollowBtn