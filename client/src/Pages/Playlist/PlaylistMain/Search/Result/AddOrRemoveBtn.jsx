import React from 'react'
import LightBtn from '@/components/LightBtn'
import '@/Pages/Playlist/PlaylistMain/Search/Result/AddOrRemoveBtn.scss'

function AddOrRemoveBtn({playlist, id, ...props}) {
  const findAddedSongs = playlist.addedSongs.some(song => song.id === id)
  
  return (
    <LightBtn
      text={findAddedSongs ? 'Remove' : 'Add'}
      className='addOrRemove'
      {...props}
    />
  )
}

export default AddOrRemoveBtn