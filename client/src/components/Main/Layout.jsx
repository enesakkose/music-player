import React from 'react'
import Footer from '@/components/Footer'
import ErrorFallback from '@/components/ErrorFallback'
import UnauthFooterBar from '@/components/Footer/UnauthFooterBar'
import Loading from '@/components/Loading'
import Main from '@/components/Main'
import { useSelector } from 'react-redux'
import { ErrorBoundary } from 'react-error-boundary'

function Layout() {
  const { user } = useSelector(state => state.auth)
  const { profile } = useSelector(state => state.profiles)
  if (user === null || user && profile === null) return <Loading />

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Main />
      {user ? <Footer /> : <UnauthFooterBar />}
    </ErrorBoundary>
  )
}

export default Layout