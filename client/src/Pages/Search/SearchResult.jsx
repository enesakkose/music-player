import React from 'react'
import SongsTableHeader from '@/components/SongsTableHeader'
import SongsTableList from '@/components/SongsTableList'
import '@/Pages/Search/SearchResult.scss'

function SearchResult({ songs }) {
  return (
    <div className='searchResult'>
      <SongsTableHeader/>
      <div className="searchResult__songs__list">
        {songs.map((song, index) => (
          <SongsTableList
            key={song.track.key}
            index={index}
            song={song.track}
            findSongs={songs}
          />
        ))}
      </div>
    </div>
  )
}

export default SearchResult