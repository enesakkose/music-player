import React from 'react'
import CustomPlaylistHeader from '@/components/Playlist/Header'
import PlaylistDropdownMenu from '@/Pages/Playlist/Header/PlaylistDropdownMenu'
import Button from '@/components/UI/Button'
import { modal } from '@/utils/helpers'
import styles from '@/Pages/Playlist/Header/Header.module.scss'

function Header({ playlist, bgColor, validUser, scrollTop, user }) {
  const coverImage = playlist?.addedSongs[0]?.track?.images?.coverart

  return (
    <CustomPlaylistHeader
      className={styles.playlistHeader}
      style={{ backgroundColor: `#${bgColor}` }}
      onClick={() => validUser ? modal('PlaylistInfoModal', playlist) : undefined}
      type='PLAYLIST'
      img={playlist?.coverURL !== null ? playlist.coverURL : playlist.addedSongs.length > 0 ? coverImage : null}
      title={playlist.name}
      validProfile={validUser}
      bg={bgColor}
      scrollTop={scrollTop}
    >
      <div className={styles.subActions}>
        <Button href={`/profile/${user?.uid}`} variant='underline'>
          {user?.displayName}
        </Button>
        {validUser && <PlaylistDropdownMenu playlist={playlist} />}
      </div>
    </CustomPlaylistHeader>
  )
}

export default Header