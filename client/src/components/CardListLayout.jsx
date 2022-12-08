import React from 'react'
import { Link } from 'react-router-dom'
import '@/components/CardListLayout.scss'

function CardListLayout({ href, title, children }) {
  return (
    <div className='cardListLayout'>
      <div className="cardListLayout__title">
        <h3>{title}</h3>
        <Link to={href}>See All</Link>
      </div>
      <div className='cardListLayout__list'>
        {children}
      </div>
    </div>
  )
}

export default CardListLayout