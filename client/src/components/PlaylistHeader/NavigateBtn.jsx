import React from 'react'
import Icon from '@/components/Icon'
import { useNavigate } from 'react-router-dom'

function NavigateBtn({ bg, scrollTop }) {
  const navigate = useNavigate()

  return (
    <button style={scrollTop >= 100 ? { backgroundColor: `#${bg}`}: undefined} className='mobileNavigateBtn' onClick={() => navigate(-1)}>
      <Icon name='left' size={25}/>
    </button>
  )
}

export default NavigateBtn