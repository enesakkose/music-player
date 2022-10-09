import Footer from '@/components/Footer'
import Main from '@/components/Main'
import { defaultRoutes } from '@/routes'
import { useRoutes } from 'react-router-dom'
import { useLocation } from 'react-use'

function App() {
  const location = useLocation()
  const path = location.pathname === '/auth'
  //some ile dene
  return (
    <div className="App">
      {path && useRoutes(defaultRoutes)}
      {!path && <div className="container">
        <Main/>
        <Footer/>
      </div>}
    </div>
  )
}

export default App
