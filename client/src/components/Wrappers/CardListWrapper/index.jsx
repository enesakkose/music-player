import React from 'react'
import clsx from 'clsx'
import styles from '@/components/Wrappers/CardListWrapper/CardListWrapper.module.scss'

function CardListWrapper({ size = '11.875rem', children, className }) {
  return (
    <div style={{ '--size': size }} className={clsx(styles.cardListWrapper, className)}>
      {children}
    </div>
  )
}

export default CardListWrapper