import React from 'react'
import styles from '@/components/MobilePlayer/Player/Cover/Cover.module.scss'

function Cover({cover}) {
  return (
    <div className={styles.cover}>
      <div style={{ background: `url(${cover})` }}/>
    </div>
  )
}

export default Cover