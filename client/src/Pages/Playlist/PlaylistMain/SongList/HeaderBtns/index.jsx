import React from 'react'
import ActionBtns from '@/components/ActionBtns'
import Icon from '@/components/Icon'
import { useSelector } from 'react-redux'
import { getNumberFormat } from '@/utils/number'
import { modal } from '@/utils'
import styles from '@/Pages/Playlist/PlaylistMain/SongList/HeaderBtns/HeaderBtns.module.scss'

function HeaderBtns({ playlist }) {
  const { user } = useSelector(state => state.auth)
  const onlyTracks = playlist.addedSongs.length > 0 && playlist.addedSongs.map((a => a.track))

  const commentModal = () => {
    user
    ? modal('CommentModal', playlist.id)
    : modal('UnauthModal')
  }

  return (
    <ActionBtns className={styles.headerBtns} findSongs={onlyTracks}>
      <button onClick={commentModal} className={styles.commentBtn}>
        <Icon name='Comment' size={25} />
        <span>{getNumberFormat(playlist.commentsCount)}</span>
      </button>
    </ActionBtns>
  )
}

export default HeaderBtns