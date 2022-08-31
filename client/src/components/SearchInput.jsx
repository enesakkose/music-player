import React, { useState } from 'react'
import Icon from '@/components/Icon'
import '@/components/SearchInput.scss'

function SearchInput() {

  const [ query, setQuery ] = useState('')

  return (
      <form className='searchInput'>
        <label>
          <Icon className='searchIcon' name='Search' size={24}/>
          <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='What do you want to listen to ?'
          />
          {query && <button onClick={() => setQuery('')} className='closeBtn'>
            <Icon name='Close' size={24}/>
          </button>}
        </label>
      </form>
    
  )
}

export default SearchInput