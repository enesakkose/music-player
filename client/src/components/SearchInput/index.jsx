import React, { useEffect } from 'react'
import Icon from '@/components/Icon'
import CloseBtn from '@/components/CloseBtn'
import { useDispatch, useSelector } from 'react-redux'
import { setQuerySongs } from '@/store/song'
import { useSearchParams } from 'react-router-dom'
import styles from '@/components/SearchInput/SearchInput.module.scss'

function SearchInput({size}) {
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const { querySongs } = useSelector(state => state.song)
  
  useEffect(() => {
    dispatch(setQuerySongs(searchParams.get('') || ''))
  }, [searchParams])

  const handleQueryChange = (e) => {
    dispatch(setQuerySongs(e.target.value))

    if(e.target.value.length === 0){
      searchParams.delete('')
      setSearchParams(searchParams, { replace: true })
    }else{
      searchParams.set('', e.target.value)
      setSearchParams(searchParams, { replace: true })
    }
  }

  const resetSearchInput = () => {
    dispatch(setQuerySongs(''))
    setSearchParams('')
  }

  return (
    <form className={styles.searchInput}>
      <label>
        <Icon name='Search' size={24}/>
        <input
          autoFocus={!size ? true : false}
          type="text"
          onChange={handleQueryChange}
          value={querySongs}
          placeholder='What do you want to listen to ?'
        />
        {querySongs && <CloseBtn onClick={resetSearchInput} className={styles.closeBtn}/>}
        {querySongs.length === 1 && !size && 
        <p className={styles.error}>Please enter min 2 character</p>}
      </label>
    </form>
    
  )
}

export default SearchInput