import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '@/components/Icon'

function Navbar() {
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
      <NavLink to='/collection/playlists'>
        <Icon name='Book' size={30}/>
        library
      </NavLink>
  </nav>
  )
}

export default Navbar