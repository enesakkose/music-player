import React from 'react'
import Icon from '@/components/Icon'
import { NavLink } from 'react-router-dom'
import '@/components/Sidebar/Sidebar.scss'

function Library() {
  return (
    <nav className="sidebar__content__library">
      <h5 className='sidebar__content__library__title'>YOUR LIBRARY</h5>
      <div className="sidebar__content__library__links">
        <NavLink 
        className={(favorites) => favorites.isActive 
        ? 'favoritesActive favorites' : 'favorites'} 
        to='/collection/tracks'
        >
          <Icon name='Favorite' size={24}/>
          Favorites
        </NavLink>
        <NavLink to='/songs'>
          <Icon name='Music' size={24}/>
          Songs
        </NavLink>
      </div>
    </nav>
  )
}

export default Library