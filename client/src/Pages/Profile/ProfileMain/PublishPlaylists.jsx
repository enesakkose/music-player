import React from 'react'
import PlaylistInfoCard from '@/components/PlaylistInfoCard'
import CardListLayout from '@/components/CardListLayout'

function PublishPlaylists({ publishPlaylists }) {
  return (
    <CardListLayout 
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
    </CardListLayout>
  )
}

export default PublishPlaylists