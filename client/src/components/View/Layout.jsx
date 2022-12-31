import React, { useEffect } from 'react'
import Header from '@/components/View/Header'
import Popups from '@/components/Main/Popups'
import { Outlet, useLocation } from 'react-router-dom'
import '@/components/View/Layout.scss'

function Layout() {
  return (
    <div className='viewLayout'>
      <Popups/>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Layout