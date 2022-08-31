import React from 'react'
import NavigationButton from '@/components/Main/View/NavigationButton'
import UserAvatar from '@/components/Main/View/UserAvatar'
import { useLocation } from 'react-router-dom'
import SearchInput from '@/components/SearchInput'
import '@/components/Main/View/ViewLayoutHeader.scss'


function ViewLayoutHeader() {
  const location = useLocation()
  
  return (
    <header className='viewLayoutHeader'>
        <NavigationButton/>
        {location.pathname === '/search' && <SearchInput/>}
        <UserAvatar/>
    </header>
  )
}

export default ViewLayoutHeader