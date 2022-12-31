import React from 'react'
import CardListWrapper from '@/components/Wrappers/CardListWrapper'
import { GENRES } from '@/constants'
import { Link } from 'react-router-dom'
import '@/Pages/Search/Categories.scss'

function Categories() {
  return (
    <div className='categories'>
      <h3>CATEGORIES</h3>
      <CardListWrapper size='14.5rem' className="categories__list">
        {GENRES.map((genre) => (
          <Link 
            key={genre.val} 
            to={`/genre/${genre.val}`} 
            className='categories__list__card'
            style={{ backgroundColor: `${genre.joeColor}`}}
          >
            <h3 className='categories__list__card__title'>
              {genre.genre}
            </h3>
          </Link>
        ))}
      </CardListWrapper>
    </div>
  )
}

export default Categories