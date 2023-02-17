import React from 'react'
import PlaylistHeader from '@/components/Playlist/Header'

function Header({ song, bg, title, scrollTop }) {
  return (
    <PlaylistHeader
      type='SONGS'
      style={{ backgroundColor: `#${bg}`}}
      img={song?.images?.background}
      scrollTop={scrollTop}
      title={title}
      bg={bg}
    />
  )
}

export default Header