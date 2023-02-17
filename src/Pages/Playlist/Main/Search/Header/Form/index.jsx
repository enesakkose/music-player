import React from 'react'
import Icon from '@/components/UI/Icon'
import CloseBtn from '@/components/IconButtons/CloseBtn'
import styles from '@/Pages/Playlist/Main/Search/Header/Form/Form.module.scss'

function Form({ search, setSearch }) {
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const resetBtnHandle = () => {
    setSearch('')
  }

  return (
    <div className={styles.searchForm}>
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
        <Icon className={styles.searchIcon} name='Search' size={20} />
        {search.length > 1 && <CloseBtn className={styles.resetBtn} onClick={resetBtnHandle} size={22} />}
      </label>
    </div>
  )
}

export default Form