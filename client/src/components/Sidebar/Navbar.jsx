import React from 'react'
import Icon from '@/components/Icon'
import { unauthModal } from '@/utils'
import { NavLink } from 'react-router-dom'

function Navbar({user}) {
  return (
    <nav className="sidebar__content__navbar">
      <NavLink to='/'>
        <Icon name='Home' size={30}/>
        home
      </NavLink>
      <NavLink to='/search'>
        <Icon name='Search' size={30}/>
        search
      </NavLink>
      <NavLink to='/collection/playlists' onClick={(e) => unauthModal(e, user)}>
        <Icon name='Book' size={30}/>
        library
      </NavLink>
    </nav>
  )
}

export default Navbar