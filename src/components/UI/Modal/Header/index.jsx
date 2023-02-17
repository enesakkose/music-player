import React from 'react'
import CloseBtn from '@/components/IconButtons/CloseBtn'
import { closeModalHandle } from '@/utils/helpers'
import styles from '@/components/UI/Modal/Header/Header.module.scss'

function Header({ title }) {
  return (
    <header className={styles.modalHeader}>
      <h3 className={styles.title}>
        {title}
      </h3>
      <CloseBtn
        className={styles.closeBtn}
        onClick={() => closeModalHandle()}
        size={30}
      />
    </header>
  )
}

export default Header