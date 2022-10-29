import Footer from '@/components/Footer'
import Main from '@/components/Main'
import { defaultRoutes } from '@/routes'
import { useRoutes } from 'react-router-dom'
import { useLocation } from 'react-use'
import { Toaster } from 'react-hot-toast'

function App() {
  const location = useLocation()
  const path = defaultRoutes.some(r => r.path === location.pathname.substring(1))

  return (
    <div className="App">
      <Toaster/>
      {path && useRoutes(defaultRoutes)}
      {!path && <div className="container">
        <Main/>
        <Footer/>
      </div>}
    </div>
  )
}

export default App
