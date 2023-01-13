import React from 'react'
import ProfilesResult from '@/Pages/Search/Result/ProfilesResult'
import SongResult from '@/Pages/Search/Result/SongResult'
import Loading from '@/components/Loading'
import { useDebounceValue } from '@/hooks/useDebounceValue'
import { useGetSearchSongsQuery } from '@/services/music'
import { useGetProfiles } from '@/hooks/useGetProfiles'

function Result({ querySongs, size }) {
  const debouncedSearch = useDebounceValue(querySongs, 600)
  const profiles = useGetProfiles(debouncedSearch)
  const { data, isFetching, isSuccess } = useGetSearchSongsQuery(
    debouncedSearch,
    { skip: debouncedSearch.length > 1 ? false : true }
  )
  const fetchingData = isSuccess && !isFetching

  if (isFetching || profiles === null) return <Loading />

  return (
    <div className='searchResult'>
      {profiles !== null && !isFetching &&
        <ProfilesResult querySongs={debouncedSearch} profiles={profiles}/>}
      {fetchingData && <SongResult songs={data.tracks.hits} size={size}/>}
    </div>
  )
}

export default Result