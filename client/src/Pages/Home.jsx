import React, { useEffect } from 'react'
import SongCard from '@/components/SongCard'
import { useSelector, useDispatch } from 'react-redux'
import { setRecentSongs } from '@/store/song'
import '@/Pages/Home.scss'

function Home() {
  const { defaultPlaylists } = useSelector(state => state.playlist)
  const recentSongs = defaultPlaylists[0]?.recentSongs.slice(Math.max(defaultPlaylists[0]?.recentSongs.length - 6, 0)).reverse()

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