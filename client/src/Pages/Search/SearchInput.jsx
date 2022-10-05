import React, { useEffect, useMemo, useCallback, useDeferredValue } from 'react'
import { useFocus } from '@/hooks/useFocus'
import { useDispatch, useSelector } from 'react-redux'
import { setQuerySongs } from '@/store/song'
import { debounce } from 'lodash'
import Icon from '@/components/Icon'
import '@/Pages/Search/SearchInput.scss'

function SearchInput() {

  const dispatch = useDispatch()
  const { querySongs } = useSelector(state => state.song)

  const handleQueryChange = (e) => {
    dispatch(setQuerySongs(e.target.value))
  }

  const cc = () => {
    dispatch(setQuerySongs(''))
  }

  return (
    <form className='searchInput'>
      <label>
        <Icon className='searchIcon' name='Search' size={24}/>
        <input
          type="text"
          value={querySongs}
          onChange={handleQueryChange}
          placeholder='What do you want to listen to ?'
        />
        {querySongs && <button 
          type='button' 
          onClick={cc} 
          className='closeBtn'
        >
          <Icon name='Close' size={24}/>
        </button>}
      </label>
    </form>
    
  )
}

export default SearchInput