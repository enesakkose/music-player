import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import '@/components/FavoritePopup.scss'

function FavoritePopup() {

  const { favorite } = useSelector(state => state.playlist)

  return (
    //key added, React will mount component and in this way refresh animation time in css 
    <div key={uuidv4()} className='favoritePopup'>
      <h5 className='favoritePopup__text'>
        {favorite ? 'Added to' : 'Removed from'} your favorite songs
      </h5>
    </div>
  )
}

export default FavoritePopup