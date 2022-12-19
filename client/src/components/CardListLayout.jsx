import React from 'react'
import CardListWrapper from '@/components/Wrappers/CardListWrapper'
import { Link } from 'react-router-dom'
import '@/components/CardListLayout.scss'

function CardListLayout({ href = true, title, children, ...props }) {
  return (
    <div className='cardListLayout'>
      <div className="cardListLayout__title">
        <h3>{title}</h3>
        {href && <Link to={href} state={{...props}}>See All</Link>}
      </div>
      <CardListWrapper className='cardListLayout__list'>
        {children}
      </CardListWrapper>
    </div>
  )
}

export default CardListLayout