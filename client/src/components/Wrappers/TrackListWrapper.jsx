import React from 'react'
import clsx from 'clsx'
import '@/components/Wrappers/TrackWrapper.scss'

function TrackListWrapper({ children, className }) {
  return (
    <div className={clsx('trackListWrapper', className)}>
      {children}
    </div>
  )
}

export default TrackListWrapper