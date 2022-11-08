import React from 'react'
import Icon from '@/components/Icon'
import '@/modals/EmptyComments.scss'

function EmptyComments() {
  return (
    <div className='emptyComments'>
      <Icon name='Comment' size={50}/>
      <h3>It's queit here...</h3>
    </div>
  )
}

export default EmptyComments