import React from 'react'
import ActionBtns from '@/components/ActionBtns'
import SongsTableHeader from '@/components/SongsTableHeader'
import SongsTableList from '@/components/SongsTableList'

function MainContent({favoritesPlaylist}) {
  return (
    <div className="favoriteTracks__main__content">
      <ActionBtns findSongs={favoritesPlaylist} />
      <div className="favoriteTracks__main__content__songs">
        <SongsTableHeader />
        <div className='favoriteTracks__main__content__songs__list'>
          {favoritesPlaylist.map((favorite, index) => (
            <SongsTableList
              key={favorite.key}
              index={index}
              song={favorite}
              findSongs={favoritesPlaylist}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainContent