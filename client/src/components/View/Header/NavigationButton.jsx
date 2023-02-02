import React from 'react'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import NavigateBtn from '@/components/NavigateBtn'
import { useNavigate, useLocation } from 'react-router-dom'
import '@/components/View/Header/NavigationButton.scss'

function NavigationButton() {
  const navigate = useNavigate()
  const location = useLocation()
  const homePath = location.pathname === '/'

  return (
    <div className="navigationButton">
      <NavigateBtn
        disabled={homePath && window.history.state.idx === 0}
        className={window.history.state.idx === 0 ? 'disabled' : ''}
        onClick={() => navigate(-1)}
      />
      <NavigateBtn icon='right' onClick={() => navigate(1)}/>
    </div>
  )
}

export default NavigationButton