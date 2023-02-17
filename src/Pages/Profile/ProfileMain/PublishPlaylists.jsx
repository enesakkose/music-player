import React from 'react'
import PlaylistInfoCard from '@/components/Cards/PlaylistInfoCard'
import CardListContainer from '@/components/CardListContainer'

function PublishPlaylists({ publishPlaylists }) {
  return (
    <CardListContainer
      title='Publish Playlists'
      href={false}
      publishPlaylists={publishPlaylists}
    >
      {publishPlaylists.map(playlist => (
        <PlaylistInfoCard
          key={playlist.data().id}
          playlist={playlist.data()}
          userName={playlist.data().displayName}
        />
      ))}
    </CardListContainer>
  )
}

export default PublishPlaylists