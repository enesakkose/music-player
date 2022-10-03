import React from 'react'
import { GENRES } from '@/constants'
import { Link } from 'react-router-dom'
import '@/Pages/Search.scss'

function Search() {
  return (
    <div className='search'>
      <h3>CATEGORIES</h3>
      <div className="search__genres">
        {GENRES.map((genre) => (
          
          <Link 
            key={genre.val} 
            to={`/genre/${genre.val}`} 
            className='search__genres__card'
            style={{ backgroundColor: `${genre.joeColor}`}}
          >
            <h3 className='search__genres__card__title'>
              {genre.genre}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Search