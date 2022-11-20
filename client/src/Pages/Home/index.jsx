import React, { useState } from 'react'
import RecentSongs from '@/Pages/Home/RecentSongs'
import Loading from '@/components/Loading'
import { useSelector } from 'react-redux'
import '@/Pages/Home/Home.scss'

function Home() {
  const [bgColor, setBgColor] = useState('')
  const { defaultPlaylists } = useSelector(state => state.playlist)

  if(defaultPlaylists === null) return <Loading/>

  const recentSongs = defaultPlaylists[0]?.recentSongs.slice(-6).reverse()

  return (
    <section className='home'>
      <RecentSongs recentSongs={recentSongs} setBgColor={setBgColor}/>
      <div className="home__bg" style={{ backgroundColor: `${bgColor}` }}/>
    </section>
  )
}

export default Home