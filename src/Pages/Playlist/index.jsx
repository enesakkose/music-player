import React, { useRef } from 'react'
import Header from '@/Pages/Playlist/Header'
import Main from '@/Pages/Playlist/Main'
import { useGetProfile } from '@/utils/hooks/useGetProfile'
import { getBreakPoint } from '@/utils/helpers/media'
import { useValidUser } from '@/utils/hooks/useValidUser'
import { useHandleScroll } from '@/utils/hooks/useScroll'
import { useGetPlaylist } from '@/utils/hooks/useGetPlaylist'
import { useParams } from 'react-router-dom'
import styles from '@/Pages/Playlist/Playlist.module.scss'

function Playlist() {
  const { playlistId } = useParams()
  const playlist = useGetPlaylist(playlistId)
  const validUser = useValidUser(playlist?.uid)
  const user = useGetProfile(playlist?.uid)
  const ref = useRef(null)
  const scrollTop = useHandleScroll(ref)
  const bgColor = playlist?.addedSongs[0]?.track?.images?.joecolor?.slice(18, 24)
  const SM = getBreakPoint('SM')

  if (playlist === null || user === null) return

  return (
    <div ref={ref} key={playlist.id} className={styles.playlist}>
      <Header
        playlist={playlist}
        bgColor={bgColor}
        validUser={validUser}
        scrollTop={scrollTop}
        user={user}
      />
      <Main
        playlist={playlist}
        validUser={validUser}
        bgColor={bgColor}
        SM={SM}
      />
    </div>
  )
}

export default Playlist