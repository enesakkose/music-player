import React from 'react'
import LightBtn from '@/components/LightBtn'
import { navigateAuth } from '@/utils'
import styles from '@/components/Footer/UnauthFooterBar/UnauthFooterBar.module.scss'

function UnauthFooterBar() {
  return (
    <div className={styles.unauthFooterBar}>
      <p className={styles.text}>
        Sign up to get unlimited songs and discover new music around the world.
      </p>
      <LightBtn text='Sign up free' onClick={() => navigateAuth()}/>
    </div>
  )
}

export default UnauthFooterBar