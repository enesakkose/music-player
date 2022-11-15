import React from 'react'
import Categories from '@/Pages/Search/Categories'
import SearchResult from '@/Pages/Search/SearchResult'
import { useSelector } from 'react-redux'
import '@/Pages/Search/Search.scss'

function Search() {
  const { querySongs } = useSelector(state => state.song)

  return (
    <div className='search'>
      {querySongs.length < 2 && <Categories/>}
      <SearchResult querySongs={querySongs}/>
    </div>
  )
}

export default Search