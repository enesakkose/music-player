import React from 'react'
import App404 from '@/Pages/404'
import { useNavigate } from 'react-router-dom'
import '@/components/ErrorFallback.scss'

function ErrorFallback() {
  const navigate = useNavigate()
  
  return (
    <App404 className='errorFallback' errorMessage='Something went wrong'>
      <button className='backBtn' onClick={() => navigate(-1)}>
        BACK
      </button>
    </App404>
  )
}

export default ErrorFallback