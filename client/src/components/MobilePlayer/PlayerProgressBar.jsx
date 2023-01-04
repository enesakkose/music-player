import React from 'react'
import CustomRange from '@/components/CustomRange'
import '@/components/MobilePlayer/PlayerProgressBar.scss'

function PlayerProgressBar() {
  return (
    <CustomRange
      className='playerProgressBar'
      min={0} 
      max={3}
      value={1}
    />
  )
}

export default PlayerProgressBar