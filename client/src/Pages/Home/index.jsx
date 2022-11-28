import React, { useState } from 'react'
import CardListLayout from '@/Pages/Home/CardListLayout'
import Loading from '@/components/Loading'
import { useSelector } from 'react-redux'
import { useGetChartsByGenreQuery } from '@/services/music'
import '@/Pages/Home/Home.scss'

function Home() {
  const [bgColor, setBgColor] = useState('')
  const { defaultPlaylists, playlists } = useSelector(state => state.playlist)
  const { data: songs, isFetching } = useGetChartsByGenreQuery('WORLDWIDE')

  if(defaultPlaylists === null || isFetching) return <Loading/>

  const recentSongs = defaultPlaylists[0]?.recentSongs.slice(-6).reverse()

  return (
    <section className='home'>
      {recentSongs.length > 0 && 
        <CardListLayout 
          data={recentSongs}
          link='/recentSongs'
          title='Recent Songs'
          onMouseOver={true}
          setBgColor={setBgColor}
        />
      }

      {playlists.length > 0 && 
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