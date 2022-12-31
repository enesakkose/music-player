import React from 'react'
import ActionBtns from '@/components/ActionBtns'
import SongsTableHeader from '@/components/SongsTableHeader'
import SongsTableList from '@/components/SongsTableList'

function MainContent({favorites}) {
  return (
    <div className="favoriteTracks__main__content">
      <ActionBtns findSongs={favorites} />
      <div className="favoriteTracks__main__content__songs">
        <SongsTableHeader />
        <div className='favoriteTracks__main__content__songs__list'>
          {favorites.map((favorite, index) => (
            <SongsTableList
              key={favorite.key}
              index={index}
              song={favorite}
              findSongs={favorites}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainContent