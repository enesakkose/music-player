import React from 'react'
import Button from '@/components/UI/Button'
import { navigateAuth } from '@/utils/helpers'
import styles from '@/Parts/Footer/UnauthFooterBar/UnauthFooterBar.module.scss'

function UnauthFooterBar() {
  return (
    <div className={styles.unauthFooterBar}>
      <p className={styles.text}>
        Sign up to get unlimited songs and discover new music around the world.
      </p>
      <Button variant='contained' color='primary' onClick={() => navigateAuth()}>
        Sign up free
      </Button>
    </div>
  )
}

export default UnauthFooterBar