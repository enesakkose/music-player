import React from 'react'
import Icon from '@/components/UI/Icon'
import Button from '@/components/UI/Button'
import styles from '@/components/IconButtons/CommentBtn/CommentBtn.module.scss'

function CommentBtn({ children, ...props }) {
  return (
    <Button className={styles.commentBtn} hover='h-primary' {...props}>
      <Icon name='Comment' size={25}/>
      {children}
    </Button>
  )
}

export default CommentBtn