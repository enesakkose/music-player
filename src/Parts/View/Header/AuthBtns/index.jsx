import React from 'react'
import Button from '@/components/UI/Button'
import { navigateAuth } from '@/utils/helpers'
import styles from '@/Parts/View/Header/AuthBtns/AuthBtns.module.scss'

function AuthBtns() {
  return (
    <div className={styles.authBtns}>
      <Button
        variant='contained'
        color='tertiary'
        onClick={() => navigateAuth()}
      >
        Sign up
      </Button>
      <Button
        variant='contained'
        color='primary'
        onClick={() => navigateAuth()}
      >
        Log in
      </Button>
    </div>
  )
}

export default AuthBtns