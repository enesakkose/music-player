import React from 'react'
import clsx from 'clsx'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import styles from '@/components/BrandLogo/BrandLogo.module.scss'

function BrandLogo({ size, className }) {
  return (
    <Button href='/' className={clsx(styles.brandLogo, className)}>
      <Icon name='Logo' size={size}/>
      MUSIC
    </Button>
  )
}

export default BrandLogo