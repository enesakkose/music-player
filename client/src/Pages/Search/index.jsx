import React from 'react'
import Categories from '@/Pages/Search/Categories'
import Result from '@/Pages/Search/Result'
import PageWrapper from '@/components/Wrappers/PageWrapper'
import { useSelector } from 'react-redux'
import '@/Pages/Search/Search.scss'

function Search() {
  const { querySongs } = useSelector(state => state.song)

  return (
    <PageWrapper className='search'>
      {querySongs.length < 2 && <Categories/>}
      {querySongs.length > 1 && <Result querySongs={querySongs}/>}
    </PageWrapper>
  )
}

export default Search