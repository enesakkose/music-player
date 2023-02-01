import React from 'react'
import CloseBtn from '@/components/Modal/CloseBtn'
import styles from '@/components/Modal/Header/Header.module.scss'

function Header({title}) {
  return (
    <header className={styles.modalHeader}>
      <h3 className={styles.title}>
        {title}
      </h3>
      <CloseBtn/>
    </header>
  )
}

export default Header