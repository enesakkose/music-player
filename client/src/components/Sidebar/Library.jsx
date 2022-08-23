import React from 'react'
import Icon from '@/components/Icon'
import { NavLink } from 'react-router-dom'
import '@/components/Sidebar/Sidebar.scss'

function Library() {
  return (
    <div className="sidebar__content__library">
        <h4>YOUR LIBRARY</h4>
        <div className="sidebar__content__library__links">
          <NavLink to='/'>
           <Icon name='Favorite' size={24}/>
           Favorites
          </NavLink>
          <NavLink to='/'>
           <Icon name='Music' size={24}/>
           Sings
          </NavLink>
        </div>
    </div>
  )
}

export default Library