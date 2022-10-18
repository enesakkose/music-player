import React, { useEffect } from 'react'
import SongCard from '@/components/SongCard'
import { useSelector, useDispatch } from 'react-redux'
import { setRecentSongs } from '@/store/song'
import '@/Pages/Home.scss'

function Home() {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { current, isActive } = useSelector(state => state.player)
  const { recentSongs } = useSelector(state => state.song)
  const s = recentSongs.some(song => song.key === current.key)
  console.log(recentSongs)


  
  
  return (
    <section className='home'>
      {recentSongs.length > 0 && <div className='home__recent__songs'>
        <h3 className='home__recent__songs__title'>
          Recent Songs
        </h3>
        <div className='home__recent__songs__cards'>
          {recentSongs.map((recent, index) => (
            <SongCard 
              key={recent.key} 
              song={recent} 
              data={recentSongs}
              index={index}
            />
          ))}
        </div>
          </div>}
    </section>
  )
}

export default Home