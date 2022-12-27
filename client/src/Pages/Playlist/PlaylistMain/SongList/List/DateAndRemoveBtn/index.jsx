import React from 'react'
import moment from 'moment'
import RemoveBtn from '@/Pages/Playlist/PlaylistMain/SongList/List/DateAndRemoveBtn/RemoveBtn'
import { useValidUser } from '@/hooks/useValidUser'
import '@/Pages/Playlist/PlaylistMain/SongList/List/DateAndRemoveBtn/DateAndRemoveBtn.scss'

function DateAndRemoveBtn({ song, playlist }) {
  const validUser = useValidUser(playlist.uid)
  
  return (
    <div className='dateAndRemoveBtn'>
      <span>{moment(song.createdAt).fromNow()}</span>
      {validUser && 
        <RemoveBtn 
          song={song} 
          playlistId={playlist.id}
        />
      }
    </div>
  )
}

export default DateAndRemoveBtn