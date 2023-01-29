import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import Icon from '@/components/Icon'
import styles from '@/components/BrandLogo/BrandLogo.module.scss'

function BrandLogo({size, className}) {
  return (
    <h3 className={clsx(styles.brandLogo, className)}>
      <Link to='/'>
        <Icon name='Logo' size={size}/>
        MUSIC
      </Link>
    </h3>
  )
}

export default BrandLogo