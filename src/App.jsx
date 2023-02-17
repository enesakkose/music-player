import React from 'react'
import ErrorFallback from '@/components/ErrorFallback'
import { routes } from '@/Routes'
import { useRoutes } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Toaster/>
        {useRoutes(routes)}
      </ErrorBoundary>
    </div>
  )
}

export default App