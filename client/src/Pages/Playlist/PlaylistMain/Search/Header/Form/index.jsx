import React from 'react'
import Icon from '@/components/Icon'
import ResetBtn from '@/Pages/Playlist/PlaylistMain/Search/Header/Form/ResetBtn'
import '@/Pages/Playlist/PlaylistMain/Search/Header/Form/Form.scss'

function Form({ search, setSearch }) {
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="searchForm">
      <h3>Let's find something for playlist</h3>
      <label>
        <input
          value={search}
          autoComplete='off'
          type="text"
          name='search' 
          placeholder='Search for songs'
          onChange={handleSearch}
        />
        <Icon className='searchIcon' name='Search' size={20}/>
        {search.length > 1 && <ResetBtn setSearch={setSearch}/>}
      </label>
    </div>
  )
}

export default Form