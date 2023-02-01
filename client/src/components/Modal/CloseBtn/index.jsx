import React from 'react'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import { closeModalHandle } from '@/utils'
import styles from '@/components/Modal/CloseBtn/CloseBtn.module.scss'

function CloseBtn() {
  return (
    <Button className={styles.closeBtn} onClick={() => closeModalHandle()}>
      <Icon name='Close' size={30}/>
    </Button>
  )
}

export default CloseBtn