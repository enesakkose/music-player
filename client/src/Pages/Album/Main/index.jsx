import React from 'react'
import ActionBtns from '@/Pages/Album/Main/ActionBtns'
import SongsList from '@/Pages/Album/Main/SongsList'
import SongsTable from '@/components/SongsTable'

function Main({findSongs, backgroundColor}) {
  return (
    <main className="album__content">
      <ActionBtns findSongs={findSongs}/>
      <div className="album__content__songs">
        <SongsTable/>
        <div className="album__content__songs__list">
          {findSongs.map((song, index) => (
            <SongsList song={song} index={index} key={song.key}/>
          ))}
        </div>
      </div>
      <div 
        className="album__content__background" 
        style={{ backgroundColor: `#${backgroundColor}`}}
      />
    </main>
  )
}

export default Main