import React from 'react'
import Categories from '@/Pages/Search/Categories'
import Result from '@/Pages/Search/Result'
import PageWrapper from '@/components/Wrappers/PageWrapper'
import SearchInput from '@/components/SearchInput'
import { getMobileTabletSize } from '@/utils/size'
import { useSelector } from 'react-redux'
import '@/Pages/Search/Search.scss'

function Search() {
  const { querySongs } = useSelector(state => state.song)
  const size = getMobileTabletSize()

  return (
    <PageWrapper className='search'>
      {size && <> 
        <h2>Search</h2>
        <SearchInput size={size}/>
      </>}
      {querySongs.length < 2 && <Categories/>}
      {querySongs.length > 1 && <Result size={size} querySongs={querySongs}/>}
    </PageWrapper>
  )
}

export default Search