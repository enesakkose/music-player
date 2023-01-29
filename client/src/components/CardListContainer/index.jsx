import React from 'react'
import CardListWrapper from '@/components/Wrappers/CardListWrapper'
import { Link } from 'react-router-dom'
import styles from '@/components/CardListContainer/CardListContainer.module.scss'

function CardListContainer({ href = true, title, children, ...props }) {
  return (
    <div className={styles.cardListContainer}>
      <div className={styles.title}>
        <h3>{title}</h3>
        {href && <Link to={href} state={{...props}}>See All</Link>}
      </div>
      <CardListWrapper>
        {children}
      </CardListWrapper>
    </div>
  )
}

export default CardListContainer