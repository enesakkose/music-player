import React from 'react'
import NavigationButton from '@/components/Main/View/NavigationButton'
import UserAvatar from '@/components/Main/View/UserAvatar'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SearchInput from '@/Pages/Search/SearchInput'
import '@/components/Main/View/ViewLayoutHeader.scss'

function ViewLayoutHeader() {
  const location = useLocation()
  const { user } = useSelector(state => state.auth)
  
  return (
    <header className='viewLayoutHeader'>
      <NavigationButton/>
      {location.pathname === '/search' && <SearchInput/>}
      {user && <UserAvatar/>}
    </header>
  )
}

export default ViewLayoutHeader