import React from 'react'
import clsx from 'clsx'
import '@/components/Wrappers/PageWrapper.scss'

function PageWrapper({ as = 'section', children, className }) {
  return React.createElement(
    as,
    { className: clsx('pageWrapper', className)},
    children
  )
}

export default PageWrapper