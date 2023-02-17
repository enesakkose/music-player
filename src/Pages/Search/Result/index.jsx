import React from 'react'
import ProfilesResult from '@/Pages/Search/Result/ProfilesResult'
import SongResult from '@/Pages/Search/Result/SongResult'
import Loading from '@/components/UI/Loading'
import { useDebounceValue } from '@/utils/hooks/useDebounceValue'
import { useGetSearchSongsQuery } from '@/services/music'
import { useGetProfiles } from '@/utils/hooks/useGetProfiles'

function Result({ querySongs }) {
  const debouncedSearch = useDebounceValue(querySongs, 600)
  const profiles = useGetProfiles(debouncedSearch)
  const { data, isFetching, isSuccess } = useGetSearchSongsQuery(
    debouncedSearch,
    { skip: debouncedSearch.length > 1 ? false : true }
  )
  const fetchingData = isSuccess && !isFetching
  const profileFetching = profiles !== null && !isFetching

  if (isFetching || profiles === null) return <Loading />

  return (
    <div className='searchResult'>
      {profileFetching && <ProfilesResult querySongs={debouncedSearch} profiles={profiles} />}
      {fetchingData && <SongResult songs={data.tracks.hits} />}
    </div>
  )
}

export default Result