import React from 'react'
import { GENRES } from '@/constants'
import { Link } from 'react-router-dom'
import '@/Pages/Search/Categories.scss'

function Categories() {
  return (
    <div className='categories'>
      <h3>CATEGORIES</h3>
      <div className="categories__list">
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
      </div>
    </div>
  )
}

export default Categories