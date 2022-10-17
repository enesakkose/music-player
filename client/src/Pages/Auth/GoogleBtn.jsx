import React from 'react'
import Icon from '@/components/Icon'

function GoogleBtn({text}) {
  return (
    <>
      <Icon name='Google' size={30}/>
      <h5 className='auth__content__googleBtn__text'>
        {text}
      </h5>
    </>
  )
}

export default GoogleBtn