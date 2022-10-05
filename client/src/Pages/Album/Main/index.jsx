import React from 'react'
import ActionBtns from '@/Pages/Album/Main/ActionBtns'
import SongsList from '@/Pages/Album/Main/SongsList'
import SongsTableHeader from '@/components/SongsTableHeader'

function Main({findSongs, backgroundColor}) {
  const filterFindSongs = findSongs.filter(f => f.hub.actions)
  
  return (
    <main className="album__content">
      <ActionBtns findSongs={findSongs}/>
      <div className="album__content__songs">
        <SongsTableHeader/>
        <div className="album__content__songs__list">
          {filterFindSongs.map((song, index) => (
            <SongsList 
              song={song} 
              findSongs={filterFindSongs} 
              index={index} 
              key={song.key}
            />
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