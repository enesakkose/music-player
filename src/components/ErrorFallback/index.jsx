import React from 'react'
import App404 from '@/Pages/404'
import Button from '@/components/UI/Button'
import { useNavigate } from 'react-router-dom'

function ErrorFallback() {
  const navigate = useNavigate()

  return (
    <App404 errorMessage='Something went wrong'>
      <Button hover='h-primary' onClick={() => navigate(0)}>
        TRY AGAIN
      </Button>
    </App404>
  )
}

export default ErrorFallback