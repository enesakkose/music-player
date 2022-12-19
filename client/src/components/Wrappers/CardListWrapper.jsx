import React from 'react'
import clsx from 'clsx'
import '@/components/Wrappers/cardListWrapper.scss'

function CardListWrapper({ size = '11.875rem', children, className }) {
  return (
    <div 
      style={{ '--size': size }} 
      className={clsx('cardListWrapper', className)}
    >
      {children}
    </div>
  )
}

export default CardListWrapper