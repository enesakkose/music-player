import React from 'react'
import Button from '@/components/Button'
import styles from '@/Pages/Profile/ProfileHeader/ProfileHeaderBtns/NavigateBtn/NavigateBtn.module.scss'

function NavigateBtn({ text, ...props }) {
  return (
    <Button className={styles.navigateBtn} {...props}>
      {text}
    </Button>
  )
}

export default NavigateBtn