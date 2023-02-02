import React from 'react'
import clsx from 'clsx'
import SearchError from '@/components/SearchError'
import ResultList from '@/Pages/Playlist/Main/Search/Result/List'
import { useGetSearchSongsQuery } from '@/services/music'
import { useDebounceValue } from '@/hooks/useDebounceValue'
import styles from '@/Pages/Playlist/Main/Search/Result/Result.module.scss'

function Result({ show, search, playlist }) {
  const debouncedSearch = useDebounceValue(search, 600)
  const {data: result, isFetching, error, isSuccess} = useGetSearchSongsQuery(debouncedSearch, { skip: debouncedSearch.length > 1 ? false : true })

  return (
    <div className={clsx(styles.searchResult, show ? styles.hideSearchResult : '')}>
      {isFetching || error  && <SearchError text={search} status={error.status}/>}
      {isSuccess && !isFetching && <ResultList
        show={show}
        result={result} 
        playlist={playlist} 
      />}
    </div>
  )
}

export default Result