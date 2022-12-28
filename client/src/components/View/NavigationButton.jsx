import React from 'react'
import Icon from '@/components/Icon'
import { useNavigate, useLocation } from 'react-router-dom'
import '@/components/View/NavigationButton.scss'

function NavigationButton() {
  const navigate = useNavigate()
  const location = useLocation()
  const homePath = location.pathname === '/'

  return (
    <div className="navigationButton">
      <button 
        disabled={homePath && window.history.state.idx === 0} 
        className={window.history.state.idx === 0 ? 'disabled': ''} 
        onClick={() => navigate(-1)}
      >
        <Icon name='Left' size={24}/>
      </button>
      <button onClick={() => navigate(1)}>
        <Icon name='Right' size={24}/>
      </button>
    </div>
  )
}

export default NavigationButton