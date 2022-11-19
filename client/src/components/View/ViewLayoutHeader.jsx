import React from 'react'
import NavigationButton from '@/components/View/NavigationButton'
import UserAvatar from '@/components/View/UserAvatar'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SearchInput from '@/Pages/Search/SearchInput'
import '@/components/View/ViewLayoutHeader.scss'

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