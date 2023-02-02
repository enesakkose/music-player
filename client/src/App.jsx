import React from 'react'
import ErrorFallback from '@/components/ErrorFallback'
import { routes } from '@/routes'
import { useRoutes } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {useRoutes(routes)}
      </ErrorBoundary>
    </div>
  )
}

export default App