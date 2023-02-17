import React from 'react'
import NavigateBtn from '@/components/IconButtons/NavigateBtn'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from '@/Parts/View/Header/NavigationButton/NavigationButton.module.scss'

function NavigationButton() {
  const navigate = useNavigate()
  const location = useLocation()
  const homePath = location.pathname === '/'

  return (
    <div className={styles.navigationButton}>
      <NavigateBtn
        disabled={homePath && window.history.state.idx === 0}
        className={window.history.state.idx === 0 ? 'disabled' : ''}
        onClick={() => navigate(-1)}
      />
      <NavigateBtn icon='right' onClick={() => navigate(1)} />
    </div>
  )
}

export default NavigationButton