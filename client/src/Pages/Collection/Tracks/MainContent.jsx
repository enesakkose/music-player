import React from 'react'
import ActionBtns from '@/components/ActionBtns'
import SongsTableHeader from '@/components/SongsTableHeader'
import SongsTableList from '@/components/SongsTableList'
import PageWrapper from '@/components/Wrappers/PageWrapper'

function MainContent({favorites}) {
  return (
    <PageWrapper as='div' className="favoriteTracks__main__content">
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
    </PageWrapper>
  )
}

export default MainContent