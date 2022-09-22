import React from 'react'
import Icon from '@/components/Icon'

function GoogleBtn({text}) {
  return (
    <>
      <Icon name='Google' size={30}/>
      <h4 className='auth__content__googleBtn__text'>
        {text}
      </h4>
    </>
  )
}

export default GoogleBtn