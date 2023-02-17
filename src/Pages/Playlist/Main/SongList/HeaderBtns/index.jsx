import React from 'react'
import ActionBtns from '@/components/ActionBtns'
import CommentBtn from '@/components/IconButtons/CommentBtn'
import { useSelector } from 'react-redux'
import { getCommentCountFormat } from '@/utils/helpers/number'
import { modal } from '@/utils/helpers'
import styles from '@/Pages/Playlist/Main/SongList/HeaderBtns/HeaderBtns.module.scss'

function HeaderBtns({ playlist }) {
  const { user } = useSelector(state => state.auth)
  const onlyTracks = playlist.addedSongs.length > 0 && playlist.addedSongs.map((a => a.track))

  const commentModal = () => {
    user
      ? modal('CommentModal', playlist.id)
      : modal('UnauthModal')
  }

  return (
    <ActionBtns className={styles.headerBtns} songs={onlyTracks}>
      <CommentBtn onClick={commentModal}>
        <span>{getCommentCountFormat(playlist.commentsCount)}</span>
      </CommentBtn>
    </ActionBtns>
  )
}

export default HeaderBtns