import React from 'react'
import Categories from '@/Pages/Search/Categories'
import Result from '@/Pages/Search/Result'
import PageWrapper from '@/components/Wrappers/PageWrapper'
import SearchInput from '@/components/UI/SearchInput'
import { getBreakPoint } from '@/utils/helpers/media'
import { useSelector } from 'react-redux'

function Search() {
  const SM = getBreakPoint('SM')
  const { querySongs } = useSelector(state => state.song)

  return (
    <PageWrapper className='search'>
      {SM && <SearchInput />}
      {querySongs.length < 2 && <Categories />}
      {querySongs.length > 1 && <Result querySongs={querySongs} />}
    </PageWrapper>
  )
}

export default Search