import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setRecentSongs } from '@/store/song'
import SongCard from '@/components/SongCard'
import '@/Pages/Home.scss'

function Home() {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { current, isPlaying } = useSelector(state => state.player)
  const { recentSongs } = useSelector(state => state.song)
  const f = recentSongs?.find(song => song.key === current.key)
  
  useEffect(() => {
    if(isPlaying && !f) dispatch(setRecentSongs(current)) 
  }, [current])

  return (
    <section className='home'>
      {recentSongs.length > 0 && <div className='home__recent__songs'>
        <h2 className='home__recent__songs__title'>
          Recent Songs
        </h2>
        <div className='home__recent__songs__cards'>
          {recentSongs.map((recent) => (
            <SongCard key={recent.key} song={recent} data={recentSongs} />
          ))}
        </div>
      </div>}
    </section>
  )
}

export default Home