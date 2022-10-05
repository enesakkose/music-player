import React, { useDeferredValue, useMemo } from 'react'
import Categories from '@/Pages/Search/Categories'
import SearchResult from '@/Pages/Search/SearchResult'
import { useSelector } from 'react-redux'
import { useGetSearchSongsQuery } from '@/services/music'
import Loading from '@/components/Loading'
import '@/Pages/Search/Search.scss'

function Search() {
  const { querySongs } = useSelector(state => state.song)
  const { data, isFetching, error } = useGetSearchSongsQuery(querySongs.length > 1 && querySongs)
  if(error) return 'Something went wrong'
  if(isFetching) return <Loading/>
  
  return (
    <div className='search'>
      {querySongs.length < 2 && <Categories/>}
      {querySongs.length > 1  && <SearchResult data={data.tracks.hits}/>}
    </div>
  )
}

export default Search