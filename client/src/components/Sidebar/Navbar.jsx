import React from 'react'
import Icon from '@/components/Icon'
import { unauthModal } from '@/utils'
import { NavLink } from 'react-router-dom'

function Navbar({user}) {
  return (
    <nav className="sidebar__content__navbar">
      <NavLink to='/'>
        <Icon name='Home' size={30}/>
        <span>home</span>
      </NavLink>
      <NavLink to='/search'>
        <Icon name='Search' size={30}/>
        <span>search</span>
      </NavLink>
      <NavLink to='/collection/playlists' onClick={(e) => unauthModal(e, user)}>
        <Icon name='Book' size={30}/>
        <span>library</span>
      </NavLink>
    </nav>
  )
}

export default Navbar