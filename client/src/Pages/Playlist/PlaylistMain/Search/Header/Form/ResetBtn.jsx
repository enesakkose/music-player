import React from 'react'
import Icon from '@/components/Icon'

function ResetBtn({ setSearch }) {
  const resetBtn = () => {
    setSearch('')
  }
  
  return (
    <button className='resetBtn' onClick={resetBtn}>
      <Icon name='Close' size={22}/>
    </button>
  )
}

export default ResetBtn