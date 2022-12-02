import React, { useState } from 'react'
import CardListLayout from '@/Pages/Home/CardListLayout'
import Loading from '@/components/Loading'
import { useSelector } from 'react-redux'
import { useGetChartsByGenreQuery } from '@/services/music'
import '@/Pages/Home/Home.scss'

function Home() {
  const [bgColor, setBgColor] = useState('')
  const { defaultPlaylists: userPlaylists, playlists } = useSelector(state => state.playlist)
  const { user } = useSelector(state => state.auth)
  const { data: songs, isFetching } = useGetChartsByGenreQuery('WORLDWIDE')
  if(user && userPlaylists === null || isFetching) return <Loading/>

  return (
    <section className='home'>
      {user && userPlaylists[0]?.recentSongs.length > 0 &&
        <CardListLayout 
          data={userPlaylists[0]?.recentSongs.slice(-6).reverse()}
          link='/recentSongs'
          title='Recent Songs'
          onMouseOver={true}
          setBgColor={setBgColor}
        />
      }

      {playlists.length > 0 && user &&
        <CardListLayout 
          data={playlists.slice(0,6)}
          link='/collection/playlists'
          title='Your Playlist'
          playlist={true}
        />
      }
      
      <CardListLayout 
        data={songs.slice(0,6)}
        link='/genre/WORLDWIDE'
        title='Recommended For You'
      />
      
      <div className="home__bg" style={{ backgroundColor: `${bgColor}` }}/>
    </section>
  )
}

export default Home