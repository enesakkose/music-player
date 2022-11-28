import React from 'react'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import ViewLayoutHeader from '@/components/View/ViewLayoutHeader'
import Popups from '@/components/MainLayout/Popups'
import ErrorFallback from '@/components/ErrorFallback'
import { Outlet, useLocation } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import '@/components/MainLayout/MainLayout.scss'

function MainLayout() {
  const location = useLocation()

  return (
    <>
      <section className='main'>
        <Popups/>
        <Sidebar/>
        <div className='viewLayout'>
          <ViewLayoutHeader/>
          <ErrorBoundary key={location.pathname} FallbackComponent={ErrorFallback}>
            <Outlet/>
          </ErrorBoundary>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default MainLayout