import React, { useState } from 'react'
import CardList from '@/Pages/Home/CardList'
import Loading from '@/components/UI/Loading'
import GradientBg from '@/components/GradientBg'
import PageWrapper from '@/components/Wrappers/PageWrapper'
import MobileHeader from '@/Pages/Home/MobileHeader'
import { getBreakPoint } from '@/utils/helpers/media'
import { useSelector } from 'react-redux'
import { useGetChartsByGenreQuery } from '@/services/music'
import '@/Pages/Home/Home.scss'

function Home() {
  const SM = getBreakPoint('SM')
  const [ bgColor, setBgColor ] = useState('')
  const { playlists } = useSelector(state => state.playlist)
  const { user } = useSelector(state => state.auth)
  const { profile } = useSelector(state => state.profiles)
  const { data: songs, isFetching } = useGetChartsByGenreQuery('WORLDWIDE')

  if (isFetching) return <Loading />

  return (
    <PageWrapper className='home'>
      {user && SM && <MobileHeader profile={profile} />}
      {user && profile.recentSongs.length > 0 &&
        <CardList
          data={profile.recentSongs.slice(-6).reverse()}
          link='/recentSongs'
          title='Recent Songs'
          onMouseOver={true}
          setBgColor={setBgColor}
        />
      }

      {user &&
        <CardList
          data={playlists.slice(0, 6)}
          link='/collection/playlists'
          title='Your Playlist'
          playlist={true}
        />
      }

      <CardList
        data={songs.slice(0, 6)}
        link='/genre/WORLDWIDE'
        title='Recommended For You'
      />

      <GradientBg bgColor={bgColor} />
    </PageWrapper>
  )
}

export default Home