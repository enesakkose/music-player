import React from 'react'
import '@/Pages/Profile/ProfileHeader/ProfileHeaderBtns/NavigateBtN.scss'

function NavigateBtn({ text, ...props }) {
  return (
    <button className='navigateBtn' {...props}>
      {text}
    </button>
  )
}

export default NavigateBtn