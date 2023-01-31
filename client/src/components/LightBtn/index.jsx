import React from 'react'
import clsx from 'clsx'
import Button from '@/components/Button'
import styles from '@/components/LightBtn/LightBtn.module.scss'

function LightBtn({ text, className, ...props }) {
  return (
    <Button className={clsx(styles.lightBtn, className)} {...props}>
      {text}
    </Button>
  )
}

export default LightBtn