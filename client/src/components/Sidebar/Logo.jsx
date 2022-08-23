import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '@/components/Icon'

function Logo() {
  return (
    <h3 className="sidebar__content__logo">
      <Link to='/'>
        <Icon name='Logo' size={35}/>
        MUSIC
      </Link>
    </h3>
  )
}

export default Logo