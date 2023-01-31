import React from 'react'
import App404 from '@/Pages/404'
import Button from '@/components/Button'
import { useNavigate } from 'react-router-dom'
import styles from '@/components/ErrorFallback/ErrorFallback.module.scss'

function ErrorFallback() {
  const navigate = useNavigate()

  return (
    <App404 className={styles.errorFallback} errorMessage='Something went wrong'>
      <Button className={styles.backBtn} onClick={() => navigate(0)}>
        TRY AGAIN
      </Button>
    </App404>
  )
}

export default ErrorFallback