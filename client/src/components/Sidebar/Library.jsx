import React from 'react'
import Icon from '@/components/Icon'
import { NavLink } from 'react-router-dom'
import { unauthModal } from '@/utils'
import '@/components/Sidebar/Sidebar.scss'

function Library({user}) {
  return (
    <nav className="sidebar__content__library">
      <h5 className='sidebar__content__library__title'>YOUR LIBRARY</h5>
      <div className="sidebar__content__library__links">
        <NavLink 
        className={({isActive}) => isActive 
        ? 'favoritesActive favorites' : 'favorites'} 
        to='/collection/tracks'
        onClick={(e) => unauthModal(e, user)}
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