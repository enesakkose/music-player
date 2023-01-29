import React, { useEffect } from 'react'
import Header from '@/components/View/Header'
import Popups from '@/components/Main/Popups'
import { useSelector } from 'react-redux'
import { Outlet, useLocation } from 'react-router-dom'
import '@/components/View/Layout.scss'

function Layout({size}) {
  const { user } = useSelector(state => state.auth)
  const showHeader = !user || !size
  {/* !user condition added to show all screen for unAuth header */}

  return (
    <div className='viewLayout'>
      <Popups/>
      {showHeader && <Header user={user} size={size}/>}
      <Outlet/>
    </div>
  )
}

export default Layout