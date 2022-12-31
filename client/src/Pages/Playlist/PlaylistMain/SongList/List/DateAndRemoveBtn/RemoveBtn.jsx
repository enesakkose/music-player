import React from 'react'
import Icon from '@/components/Icon'
import { removeFromAddedSongs } from '@/firebase/db'

function RemoveBtn({ song, playlistId }) {
  const removeSong = () => {
    removeFromAddedSongs(playlistId, song)
  }

  return (
    <button onClick={removeSong} className='remove'>
      <Icon name='Remove' size={21}/>
    </button>
  )
}

export default RemoveBtn