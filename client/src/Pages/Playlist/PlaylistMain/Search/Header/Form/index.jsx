import React from 'react'
import Icon from '@/components/Icon'
import ResetBtn from '@/Pages/Playlist/PlaylistMain/Search/Header/Form/ResetBtn'
import '@/Pages/Playlist/PlaylistMain/Search/Header/Form/Form.scss'

function Form({ search, setSearch, setSkip }) {
  const handleSearch = (e) => {
    setSearch(e.target.value)
    setSkip(e.target.value.length > 1 ? false : true)
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
        {search.length > 1 && <ResetBtn setSearch={setSearch} setSkip={setSkip}/>}
      </label>
    </div>
  )
}

export default Form