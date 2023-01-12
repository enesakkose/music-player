import React from 'react'
import Icon from '@/components/Icon'
import NavigationButton from '@/components/View/Header/NavigationButton'
import UserAvatar from '@/components/View/Header/UserAvatar'
import SearchInput from '@/Pages/Search/SearchInput'
import AuthBtns from '@/components/View/Header/AuthBtns'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '@/components/View/Header/Header.scss'

function Header({ user, size }) {
  const location = useLocation()

  return (
    <header className='viewLayoutHeader'>
      {size ? <Icon name='Logo' size={30}/> : <NavigationButton />}
      {!size && location.pathname === '/search' && <SearchInput />}
      {user ? <UserAvatar /> : <AuthBtns />}
    </header>
  )
}

export default Header