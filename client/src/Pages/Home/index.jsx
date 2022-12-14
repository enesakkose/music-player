import React, { useState } from 'react'
import CardList from '@/Pages/Home/CardList'
import Loading from '@/components/Loading'
import GradientBg from '@/components/GradientBg'
import { useSelector } from 'react-redux'
import { useGetChartsByGenreQuery } from '@/services/music'
import '@/Pages/Home/Home.scss'

function Home() {
  const [bgColor, setBgColor] = useState('')
  const { playlists } = useSelector(state => state.playlist)
  const { profile: { recentSongs } } = useSelector(state => state.profiles)
  const { user } = useSelector(state => state.auth)
  const { data: songs, isFetching } = useGetChartsByGenreQuery('WORLDWIDE')
  if(isFetching) return <Loading/>

  return (
    <section className='home'>
      {user && recentSongs.length > 0 &&
        <CardList 
          data={recentSongs.slice(-6).reverse()}
          link='/recentSongs'
          title='Recent Songs'
          onMouseOver={true}
          setBgColor={setBgColor}
        />
      }

      {playlists.length > 0 && user &&
        <CardList 
          data={playlists.slice(0,6)}
          link='/collection/playlists'
          title='Your Playlist'
          playlist={true}
        />
      }
      
      <CardList 
        data={songs.slice(0,6)}
        link='/genre/WORLDWIDE'
        title='Recommended For You'
      />
      
      <GradientBg bgColor={bgColor}/>
    </section>
  )
}

export default Home