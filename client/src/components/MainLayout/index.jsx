import React from 'react'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import ViewLayoutHeader from '@/components/View/ViewLayoutHeader'
import Popups from '@/components/MainLayout/Popups'
import ErrorFallback from '@/components/ErrorFallback'
import UnauthFooterBar from '@/components/Footer/UnauthFooterBar'
import Loading from '@/components/Loading'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import '@/components/MainLayout/MainLayout.scss'

function MainLayout() {
  const { user } = useSelector(state => state.auth)
  const { profile } = useSelector(state => state.profiles)
  if(user === null || profile === null) return <Loading/>

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
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