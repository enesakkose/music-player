import React from 'react'
import clsx from 'clsx'
import SearchError from '@/components/SearchError'
import ResultList from '@/Pages/Playlist/PlaylistMain/Search/Result/List'
import { useGetSearchSongsQuery } from '@/services/music'
import { useDebounceValue } from '@/hooks/useDebounceValue'
import '@/Pages/Playlist/PlaylistMain/Search/Result/Result.scss'

function Result({ show, search, playlist, skip }) {
  const debouncedSearch = useDebounceValue(search, 600)
  const {data: result, isFetching, error, isSuccess} = useGetSearchSongsQuery(debouncedSearch, { skip })

  return (
    <div className={clsx('playlistSearchResult', show ? 'hidePlaylistSearchResult' : '')}>
      {isFetching || error  && <SearchError text={search} status={error.status}/>}
      <ResultList 
        result={result} 
        playlist={playlist} 
        isSuccess={isSuccess} 
        isFetching={isFetching}
      />
    </div>
  )
}

export default Result