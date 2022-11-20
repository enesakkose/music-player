import ErrorFallback from '@/components/ErrorFallback'
import { routes } from '@/routes'
import { useRoutes } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { ErrorBoundary } from 'react-error-boundary'

function App() {
  return (
    <div className="App">
      <ErrorBoundary key={uuidv4()} FallbackComponent={ErrorFallback}>
        {useRoutes(routes)}
      </ErrorBoundary>
    </div>
  )
}

export default App