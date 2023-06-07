import React, { useEffect } from 'react'
import Icon from '@/components/UI/Icon'
import CloseBtn from '@/components/IconButtons/CloseBtn'
import { useDispatch, useSelector } from 'react-redux'
import { setQuerySongs } from '@/store/song'
import { getBreakPoint } from '@/utils/helpers/media'
import { useSearchParams } from 'react-router-dom'
import styles from '@/components/UI/SearchInput/SearchInput.module.scss'

function SearchInput() {
  const SM = getBreakPoint('SM')
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const { querySongs } = useSelector(state => state.song)

  useEffect(() => {
    dispatch(setQuerySongs(searchParams.get('') || ''))
  }, [searchParams])

  const handleQueryChange = (e) => {
    dispatch(setQuerySongs(e.target.value))

    if (e.target.value.length === 0) {
      searchParams.delete('')
    } else {
      searchParams.set('', e.target.value)
    }

    setSearchParams(searchParams, { replace: true })
  }


  const onSubmit = (event) => {
    event.preventDefault()
  }

  const resetSearchInput = () => {
    dispatch(setQuerySongs(''))
    setSearchParams('')
  }

  return (
    <>
      {SM && <h2>Search</h2>}
      <form className={styles.searchInput} onSubmit={onSubmit}>
        <label>
          <Icon name='Search' size={24} />
          <input
            autoFocus={!SM ? true : false}
            type="text"
            onChange={handleQueryChange}
            value={querySongs}
            placeholder='What do you want to listen to ?'
          />
          {querySongs && <CloseBtn onClick={resetSearchInput} className={styles.closeBtn} />}
          {querySongs.length === 1 && !SM &&
            <p className={styles.error}>Please enter min 2 character</p>}
        </label>
      </form>
    </>
  )
}

export default SearchInput