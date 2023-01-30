import React from 'react'
import styles from '@/components/SwitchBtn/SwitchBtn.module.scss'

function SwitchBtn({title, text, ...props}) {
  return (
    <div className={styles.switchBtnContainer}>
      <span className={styles.text}>
        {title}
      </span>
      <button className={styles.switchBtn} {...props}>
        {text}
      </button>
    </div>
  )
}

export default SwitchBtn