import React from 'react'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import ViewLayoutHeader from '@/components/View/ViewLayoutHeader'
import Popups from '@/components/MainLayout/Popups'
import ErrorFallback from '@/components/ErrorFallback'
import UnauthFooterBar from '@/components/Footer/UnauthFooterBar'
import { useSelector } from 'react-redux'
import { Outlet, useLocation } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import '@/components/MainLayout/MainLayout.scss'

function MainLayout() {
  const location = useLocation()
  const { user } = useSelector(state => state.auth)

  return (
    <ErrorBoundary key={location.pathname} FallbackComponent={ErrorFallback}>
      <section className='main'>
        <Popups/>
        <Sidebar/>
        <div className='viewLayout'>
          <ViewLayoutHeader/>
          <Outlet/>
        </div>
      </section>
      {user ? <Footer/> : <UnauthFooterBar/>}
    </ErrorBoundary>
  )
}

export default MainLayout