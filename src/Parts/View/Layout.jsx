import React from 'react'
import Header from '@/Parts/View/Header'
import { getBreakPoint } from '@/utils/helpers/media'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import '@/Parts/View/Layout.scss'

function Layout() {
  const SM = getBreakPoint('SM')
  const { user } = useSelector(state => state.auth)
  const showHeader = !user || !SM
  /* !user condition added to show all screen for unAuth header */

  return (
    <div className='viewLayout'>
      <Toaster />
      {showHeader && <Header user={user} size={SM} />}
      <Outlet />
    </div>
  )
}

export default Layout