import React from 'react'
import Icon from '@/components/Icon'
import { addOrRemoveAddedSongs } from '@/firebase/db'

function RemoveBtn({ song, addedSongs, playlistId }) {
  const removeSong = async(key) => {
    await addOrRemoveAddedSongs(playlistId, {id: key}, addedSongs)
  }

  return (
    <button onClick={() => removeSong(song.track.key)} className='remove'>
      <Icon name='Remove' size={21}/>
    </button>
  )
}

export default RemoveBtn