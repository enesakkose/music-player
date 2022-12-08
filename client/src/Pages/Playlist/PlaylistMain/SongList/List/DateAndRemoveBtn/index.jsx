import React from 'react'
import moment from 'moment'
import RemoveBtn from '@/Pages/Playlist/PlaylistMain/SongList/List/DateAndRemoveBtn/RemoveBtn'
import '@/Pages/Playlist/PlaylistMain/SongList/List/DateAndRemoveBtn/DateAndRemoveBtn.scss'

function DateAndRemoveBtn({ song, addedSongs, playlistId }) {
    return (
      <div className='dateAndRemoveBtn'>
        <span>{moment(song.createdAt).fromNow()}</span>
        <RemoveBtn song={song} addedSongs={addedSongs} playlistId={playlistId}/>
      </div>
    )
}

export default DateAndRemoveBtn