import React, {Fragment} from 'react'
import '@/components/Wrappers/ScrollWrapper/ScrollWrapper.scss'

function ScrollWrapper({ children }) {
  return (
    <Fragment className='scrollWrapper'>
      {children}
    </Fragment>
  )
}

export default ScrollWrapper