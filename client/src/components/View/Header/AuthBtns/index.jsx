import React from 'react'
import LightBtn from '@/components/LightBtn'
import { navigateAuth } from '@/utils'
import styles from '@/components/View/Header/AuthBtns/AuthBtns.module.scss'

function AuthBtns() {
  return (
    <div className={styles.authBtns}>
      <LightBtn
        className={styles.signup}
        text='Sign up'
        onClick={() => navigateAuth()}
      />
      <LightBtn
        className={styles.login}
        text='Log in'
        onClick={() => navigateAuth()}
      />
    </div>
  )
}

export default AuthBtns