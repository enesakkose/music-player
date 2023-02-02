import React from 'react'
import Categories from '@/Pages/Search/Categories'
import Result from '@/Pages/Search/Result'
import PageWrapper from '@/components/Wrappers/PageWrapper'
import SearchInput from '@/components/SearchInput'
import { getMobileTabletSize } from '@/utils/size'
import { useSelector } from 'react-redux'
import styles from '@/Pages/Search/Search.module.scss'

function Search() {
  const size = getMobileTabletSize()
  const { querySongs } = useSelector(state => state.song)

  return (
    <PageWrapper className={styles.search}>
      {size && <SearchInput/>}
      {querySongs.length < 2 && <Categories/>}
      {querySongs.length > 1 && <Result querySongs={querySongs}/>}
    </PageWrapper>
  )
}

export default Search