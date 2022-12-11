import React from 'react'
import Icon from '@/components/Icon'

function ResetBtn({ setSearch, setSkip }) {
  const resetBtn = () => {
    setSearch('')
    setSkip(true)
  }
  
  return (
    <button className='resetBtn' onClick={resetBtn}>
      <Icon name='Close' size={22}/>
    </button>
  )
}

export default ResetBtn