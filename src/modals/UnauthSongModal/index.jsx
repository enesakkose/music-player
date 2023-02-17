import React from 'react'
import ModalWrapper from '@/components/Wrappers/ModalWrapper'
import Button from '@/components/UI/Button'
import { navigateAuth } from '@/utils/helpers'
import { closeModalHandle } from '@/utils/helpers'
import styles from '@/modals/UnauthSongModal/UnauthSongModal.module.scss'

function UnauthSongModal({ outClickRef, data: songData }) {
  const backgroundColor = songData?.images?.joecolor?.slice(18, 24)

  return (
    <ModalWrapper
      ref={outClickRef}
      className={styles.unauthSongModal}
      style={{ backgroundColor: `#${backgroundColor}` }}
    >
      <img src={songData?.images?.coverart} alt={songData.title} />
      <div className={styles.info}>
        <h3>Start listening with your account</h3>
        <Button variant='outline' onClick={() => navigateAuth()}>
          SIGN UP FREE
        </Button>
        <Button variant='contained' color='secondary' onClick={() => navigateAuth()}>
          LOG IN ACCOUNT
        </Button>
      </div>
      <Button
        onClick={() => closeModalHandle()}
        className={styles.closeBtn}
      >
        CLOSE
      </Button>
    </ModalWrapper>
  )
}

export default UnauthSongModal