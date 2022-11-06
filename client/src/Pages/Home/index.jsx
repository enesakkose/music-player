import React, { useEffect } from 'react'
import SongCard from '@/components/SongCard'
import { useSelector, useDispatch } from 'react-redux'
import { setRecentSongs } from '@/store/song'
import RecentSongs from '@/Pages/Home/RecentSongs'
import Loading from '@/components/Loading'
import '@/Pages/Home/Home.scss'

function Home() {
  const { defaultPlaylists } = useSelector(state => state.playlist)

  if(defaultPlaylists === null) return <Loading/>

  const recentSongs = defaultPlaylists[0]?.recentSongs.slice(-6).reverse()

  return (
    <section className='home'>
      <RecentSongs recentSongs={recentSongs}/>
    </section>
  )
}

export default Home