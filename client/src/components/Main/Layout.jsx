import React from 'react'
import ErrorFallback from '@/components/ErrorFallback'
import Loading from '@/components/Loading'
import Main from '@/components/Main'
import Footer from '@/components/Footer/Layout'
import { useSelector } from 'react-redux'
import { ErrorBoundary } from 'react-error-boundary'

function Layout() {
  const { user } = useSelector(state => state.auth)
  const { profile } = useSelector(state => state.profiles)
  if (user === null || user && profile === null) return <Loading />

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Main />
      <Footer/>
    </ErrorBoundary>
  )
}

export default Layout