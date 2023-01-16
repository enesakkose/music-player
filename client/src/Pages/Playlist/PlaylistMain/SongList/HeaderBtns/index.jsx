import React from 'react'
import ActionBtns from '@/components/ActionBtns'
import Icon from '@/components/Icon'
import { useSelector } from 'react-redux'
import { getNumberFormat } from '@/utils/number'
import { modal } from '@/utils'
import '@/Pages/Playlist/PlaylistMain/SongList/HeaderBtns/HeaderBtns.scss'

function HeaderBtns({ playlist, size }) {
  const { user } = useSelector(state => state.auth)
  const onlyTracks = playlist.addedSongs.length > 0 && playlist.addedSongs.map((a => a.track))

  const commentModal = () => {
    user
    ? modal('CommentModal', playlist.id)
    : modal('UnauthModal')
  }

  return (
    <ActionBtns 
      className='headerBtns' 
      findSongs={onlyTracks}
    >
      {<button onClick={commentModal} className='commentBtn'>
        <Icon name='Comment' size={25} />
        <span>{getNumberFormat(playlist.commentsCount)}</span>
      </button>}
    </ActionBtns>
  )
}

export default HeaderBtns