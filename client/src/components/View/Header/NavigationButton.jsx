import React from 'react'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import { useNavigate, useLocation } from 'react-router-dom'
import '@/components/View/Header/NavigationButton.scss'

function NavigationButton() {
  const navigate = useNavigate()
  const location = useLocation()
  const homePath = location.pathname === '/'

  return (
    <div className="navigationButton">
      <Button 
        disabled={homePath && window.history.state.idx === 0} 
        className={window.history.state.idx === 0 ? 'disabled': ''} 
        onClick={() => navigate(-1)}
      >
        <Icon name='Left' size={24}/>
      </Button>
      <Button onClick={() => navigate(1)}>
        <Icon name='Right' size={24}/>
      </Button>
    </div>
  )
}

export default NavigationButton