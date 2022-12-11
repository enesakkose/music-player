import React from 'react'
import Icon from '@/components/Icon'

function CloseBtn({ show, setShow }) {
  return (
    <button className='closeBtn' onClick={() => setShow(prevShow => !prevShow)}>
      <Icon name={show ? 'Up' : 'Close'} size={35}/>
    </button>
  )
}

export default CloseBtn