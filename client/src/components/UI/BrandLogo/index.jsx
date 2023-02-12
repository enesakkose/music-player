import React from 'react'
import clsx from 'clsx'
import Button from '@/components/UI/Button'
import Icon from '@/components/UI/Icon'
import styles from '@/components/UI/BrandLogo/BrandLogo.module.scss'

function BrandLogo({ size, color, className }) {
  return (
    <Button href='/' className={clsx(styles.brandLogo, styles[color], className)}>
      <Icon name='Logo' size={size} />
      MUSIC
    </Button>
  )
}

export default BrandLogo