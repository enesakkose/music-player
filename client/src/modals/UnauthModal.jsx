import React from 'react'

import '@/modals/UnauthModal.scss'

function UnauthModal({outClickRef}) {
  return (
    <div ref={outClickRef} className='unauthModal'>
      UnauthorizedCar
    </div>
  )
}

export default UnauthModal