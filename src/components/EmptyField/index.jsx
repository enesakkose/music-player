import React from 'react'
import Icon from '@/components/UI/Icon'
import '@/components/EmptyField/EmptyField.scss'

function EmptyField({ icon, children }) {
  return (
    <div className='emptyField'>
      <Icon name={icon} size={50} />
      <h3>It's so queit here...</h3>
      {children}
    </div>
  )
}

export default EmptyField