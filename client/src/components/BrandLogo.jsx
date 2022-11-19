import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import Icon from '@/components/Icon'
import '@/components/BrandLogo.scss'

function BrandLogo({size, className}) {
  return (
    <h3 className={clsx('brandLogo', className)}>
      <Link to='/'>
        <Icon name='Logo' size={size}/>
        MUSIC
      </Link>
    </h3>
  )
}

export default BrandLogo