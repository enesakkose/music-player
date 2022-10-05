import React from 'react'
import SongsTableHeader from '@/components/SongsTableHeader'
import SongsTableList from '@/components/SongsTableList'
import { useSelector } from 'react-redux'
import '@/Pages/Search/SearchResult.scss'

function SearchResult({data}) {


  
  

  return (
    <div className='searchResult'>
      <SongsTableHeader/>
      <div className="searchResult__songs__list">
        {data.map((song, index) => (
          <SongsTableList
            key={song.track.key}
            index={index}
            song={song.track}
            findSongs={data}
          />
        ))}
      </div>
    </div>
  )
}

export default SearchResult