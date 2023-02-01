import React from 'react'
import ModalWrapper from '@/components/Wrappers/ModalWrapper'
import LightBtn from '@/components/LightBtn'
import Button from '@/components/Button'
import { navigateAuth } from '@/utils'
import { closeModalHandle } from '@/utils'
import styles from '@/modals/UnauthSongModal/UnauthSongModal.module.scss'

function UnauthSongModal({ outClickRef, data: songData }) {
  const backgroundColor = songData?.images?.joecolor?.slice(18,24)

  return (
    <ModalWrapper 
      ref={outClickRef} 
      className={styles.unauthSongModal} 
      style={{ backgroundColor: `#${backgroundColor}`}}
    >
      <img src={songData?.images?.coverart} alt={songData.title}/>
      <div className={styles.info}>
        <h3>Start listening with your account</h3>
        <LightBtn 
          text='SIGN UP FREE' 
          className={styles.signUpBtn}
          onClick={() => navigateAuth()}
        />
        <LightBtn 
          text='LOG IN ACCOUNT' 
          className={styles.logInBtn}
          onClick={() => navigateAuth()}
        />
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