import React from 'react'
import ProfilesResult from '@/Pages/Search/ProfilesResult'
import SongResult from '@/Pages/Search/SongResult'
import '@/Pages/Search/SearchResult.scss'

function SearchResult({ songs, querySongs, profiles }) {
  return (
    <div className='searchResult'>
      <SongResult songs={songs}/>
      <ProfilesResult querySongs={querySongs} profiles={profiles}/>
    </div>
  )
}

export default SearchResult