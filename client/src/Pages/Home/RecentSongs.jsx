import React from 'react'
import SongCard from '@/components/SongCard'

function RecentSongs({recentSongs}) {
  return (
    <>
    {recentSongs?.length > 0 && <div className='home__recent__songs'>
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
    </>
  )
}

export default RecentSongs