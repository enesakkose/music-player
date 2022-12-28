import React from 'react'
import Header from '@/components/View/Header'
import { Outlet } from 'react-router-dom'
import '@/components/View/Layout.scss'

function Layout() {
  return (
    <div className='viewLayout'>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Layout