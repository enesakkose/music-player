import React from 'react'
import { routes } from '@/routes'
import { useRoutes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="App">
      <Toaster/>
      {useRoutes(routes)}
    </div>
  )
}

export default App