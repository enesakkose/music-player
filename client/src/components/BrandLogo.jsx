import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '@/components/Icon'
import '@/components/BrandLogo.scss'

function BrandLogo({size}) {
  return (
    <h3 className="brandLogo">
      <Link to='/'>
        <Icon name='Logo' size={size}/>
        MUSIC
      </Link>
    </h3>
  )
}

export default BrandLogo