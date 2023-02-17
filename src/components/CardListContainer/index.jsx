import React from 'react'
import CardListWrapper from '@/components/Wrappers/CardListWrapper'
import Button from '@/components/UI/Button'
import styles from '@/components/CardListContainer/CardListContainer.module.scss'

function CardListContainer({ href = true, title, children, ...props }) {
  return (
    <div className={styles.cardListContainer}>
      <div className={styles.title}>
        <h3>{title}</h3>
        {href && <Button href={href} variant='underline' state={{ ...props }}>See All</Button>}
      </div>
      <CardListWrapper>
        {children}
      </CardListWrapper>
    </div>
  )
}

export default CardListContainer