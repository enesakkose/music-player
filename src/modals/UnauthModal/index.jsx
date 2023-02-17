import React from 'react'
import ModalWrapper from '@/components/Wrappers/ModalWrapper'
import Button from '@/components/UI/Button'
import { closeModalHandle, navigateAuth } from '@/utils/helpers'
import styles from '@/modals/UnauthModal/UnauthModal.module.scss'

function UnauthModal({ outClickRef }) {
  return (
    <ModalWrapper ref={outClickRef} className={styles.unauthModal}>
      <h3>Enjoy your Music</h3>
      <p className={styles.text}>
        Discover new music around the world now
      </p>
      <div className={styles.btns}>
        <Button variant='outline' onClick={() => closeModalHandle()}>
          Not now
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={() => navigateAuth()}
        >
          Log in
        </Button>
      </div>
    </ModalWrapper>
  )
}

export default UnauthModal