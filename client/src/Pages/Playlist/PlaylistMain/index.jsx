import React, { useState } from 'react'
import PlaylistWrapper from '@/components/Wrappers/PlaylistWrapper'
import PlaylistSearch from '@/Pages/Playlist/PlaylistMain/Search'
import SongList from '@/Pages/Playlist/PlaylistMain/SongList'
import GradientBg from '@/components/GradientBg'
import '@/Pages/Playlist/PlaylistMain/PlaylistMain.scss'

function PlaylistMain({ playlist, validUser, bgColor, size }) {
  const [show, setShow] = useState(true)
  const showPlaylist = playlist.addedSongs.length > 0 && show
  
  return (
    <section className='playlist__main'>
      <PlaylistWrapper className="playlist__main__content">
        {showPlaylist && <SongList playlist={playlist} size={size}/>}
        {validUser && !size && 
          <PlaylistSearch
            playlist={playlist}
            show={show}
            setShow={setShow}
          />
        }
      </PlaylistWrapper>
      <GradientBg size='40vh' bgColor={bgColor}/>
    </section>
  )
}

export default PlaylistMain