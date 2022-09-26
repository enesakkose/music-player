import React from 'react'
import Icon from '@/components/Icon'
import '@/components/Loading.scss'

function Loading() {
  return (
    <div className='loading'>
      <Icon className='loading' name='Logo' size={50}/>
    </div>
  )
}

export default Loading