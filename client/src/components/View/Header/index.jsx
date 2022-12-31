import React from 'react'
import NavigationButton from '@/components/View/Header/NavigationButton'
import UserAvatar from '@/components/View/Header/UserAvatar'
import SearchInput from '@/Pages/Search/SearchInput'
import AuthBtns from '@/components/View/Header/AuthBtns'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '@/components/View/Header/Header.scss'

function Header() {
  const location = useLocation()
  const { user } = useSelector(state => state.auth)

  return (
    <header className='viewLayoutHeader'>
      <NavigationButton />
      {location.pathname === '/search' && <SearchInput />}
      {user ? <UserAvatar /> : <AuthBtns />}
    </header>
  )
}

export default Header