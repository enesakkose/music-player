import React from 'react'
import Icon from '@/components/UI/Icon'
import styles from '@/components/UI/Loading/Loading.module.scss'

function Loading() {
  return (
    <div className={styles.loading}>
      <Icon className='loading' name='Logo' size={50} />
    </div>
  )
}

export default Loading