import React from 'react'
import PlaylistHeader from '@/components/PlaylistHeader'
import EmptyField from '@/components/EmptyField'
import LightBtn from '@/components/LightBtn'
import clsx from 'clsx'
import GradientBg from '@/components/GradientBg'
import MainContent from '@/Pages/Collection/Tracks/MainContent'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '@/Pages/Collection/Tracks/Tracks.scss'

function Tracks() {
  const { profile: { favorites } } = useSelector(state => state.profiles)

  return (
    <div className='favoriteTracks'>
      <PlaylistHeader
        className='favoriteTracks__header'
        infoTitle='PLAYLIST'
        infoHeader='LIKED SONGS'
      >
        {favorites.length > 0 && <h6>{favorites.length} songs</h6>}
      </PlaylistHeader>
      
      <div className={clsx('favoriteTracks__main', favorites.length === 0 ? 'favoriteTracks__empty' : '')}>
        {favorites.length === 0 &&
          <EmptyField icon='Music'>
            <Link to='/search'>
              <LightBtn text='Find Songs'/> 
            </Link>
          </EmptyField>}
        {favorites.length > 0 && <MainContent favorites={favorites}/>}
        <GradientBg className='favoritesGradient'/>
      </div>
    </div>
  )
}

export default Tracks