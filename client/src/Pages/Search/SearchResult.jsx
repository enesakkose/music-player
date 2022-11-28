import React, { useState, useEffect } from 'react'
import ProfilesResult from '@/Pages/Search/ProfilesResult'
import SongResult from '@/Pages/Search/SongResult'
import Loading from '@/components/Loading'
import SearchError from '@/components/SearchError'
import { useSelector } from 'react-redux'
import { useDebounceValue } from '@/hooks/useDebounceValue'
import { useGetSearchSongsQuery } from '@/services/music'
import { profileQuery } from '@/firebase/db'
import '@/Pages/Search/SearchResult.scss'

function SearchResult({ querySongs }) {
  const { profiles } = useSelector(state => state.profiles)
  const debouncedSearch = useDebounceValue(querySongs, 600)
  const [skip, setSkip] = useState(true)//this state was used to for not send request when page first render 
  const { data, isFetching, isSuccess, error } = useGetSearchSongsQuery(debouncedSearch, {skip})
  const fetchingData = isSuccess && !isFetching

  useEffect(() => {
    setSkip(querySongs.length > 1 ? false : true)
    profileQuery(querySongs)
  }, [querySongs])

  if(isFetching || profiles === null) return <Loading/>

  return (
    <div className='searchResult'>
      {error && <SearchError text={querySongs} status={error.status}/>}
      {fetchingData && <SongResult songs={data.tracks.hits}/>}
      {profiles !== null && !isFetching && 
      <ProfilesResult querySongs={debouncedSearch} profiles={profiles}/>}
    </div>
  )
}

export default SearchResult