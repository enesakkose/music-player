import React from 'react'
import Header from '@/components/View/Header'
import { getMobileTabletSize } from '@/utils/size'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import '@/components/View/Layout.scss'

function Layout() {
  const size = getMobileTabletSize()
  const { user } = useSelector(state => state.auth)
  const showHeader = !user || !size
  {/* !user condition added to show all screen for unAuth header */}

  return (
    <div className='viewLayout'>
      {showHeader && <Header user={user} size={size}/>}
      <Outlet/>
    </div>
  )
}

export default Layout