import React from 'react'
import { useFindPlaylist } from '@/hooks/useFindPlaylist'

function AddOrRemoveBtn({playlistId, id, ...props}) {
  const findPlaylist = useFindPlaylist(playlistId)
  const findAddedSongs = findPlaylist?.addedSongs?.some(song => song.id === id)
  
  return (
    <button {...props}>
      {findAddedSongs ? 'Remove' : 'Add'}
    </button>
  )
}

export default AddOrRemoveBtn