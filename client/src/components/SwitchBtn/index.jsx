import React from 'react'
import Button from '@/components/Button'
import styles from '@/components/SwitchBtn/SwitchBtn.module.scss'

function SwitchBtn({title, text, ...props}) {
  return (
    <div className={styles.switchBtnContainer}>
      <span className={styles.text}>
        {title}
      </span>
      <Button className={styles.switchBtn} {...props}>
        {text}
      </Button>
    </div>
  )
}

export default SwitchBtn