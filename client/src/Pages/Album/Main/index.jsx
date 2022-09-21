import React from 'react'
import Icon from '@/components/Icon'
import ActionBtns from '@/Pages/Album/Main/ActionBtns'
import SongsList from '@/Pages/Album/Main/SongsList'
import SongsTable from '@/components/SongsTable'

function Main({findSongs}) {
  return (
    <main className="album__content">
      <ActionBtns/>
      <div className="album__content__songs">
        <SongsTable/>
        <div className="album__content__songs__list">
          {findSongs.map((song, index) => (
            <SongsList song={song} index={index} key={song.id}/>
          ))}
        </div>
      </div>
      <div className="album__content__background"/>
    </main>
  )
}

export default Main