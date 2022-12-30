import React from 'react'
import ProfilesResult from '@/Pages/Search/ProfilesResult'
import SongResult from '@/Pages/Search/SongResult'
import Loading from '@/components/Loading'
import { useDebounceValue } from '@/hooks/useDebounceValue'
import { useGetSearchSongsQuery } from '@/services/music'
import { useGetProfiles } from '@/hooks/useGetProfiles'
import '@/Pages/Search/SearchResult.scss'

function SearchResult({ querySongs }) {
  const debouncedSearch = useDebounceValue(querySongs, 600)
  const profiles = useGetProfiles(debouncedSearch)
  const { data, isFetching, isSuccess } = useGetSearchSongsQuery(
    debouncedSearch, 
    {skip: debouncedSearch.length > 1 ? false : true}
  )
  const fetchingData = isSuccess && !isFetching

  if(isFetching || profiles === null) return <Loading/>

  return (
    <div className='searchResult'>
      {profiles !== null && !isFetching && 
      <ProfilesResult querySongs={debouncedSearch} profiles={profiles}/>}
      {fetchingData && <SongResult songs={data.tracks.hits}/>}
    </div>
  )
}

export default SearchResult