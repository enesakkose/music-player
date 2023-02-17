import React from 'react'
import clsx from 'clsx'
import ActionBtns from '@/components/Player/ActionBtns'
import Audio from '@/components/Player/Audio'
import styles from '@/components/Player/Player.module.scss'

function Player({ mobile = false, btnSize }) {
  return (
    <div className={clsx(mobile ? styles.mobilePlayer : styles.player)}>
      <ActionBtns size={btnSize}/>
      <Audio />
    </div>
  )
}

export default Player