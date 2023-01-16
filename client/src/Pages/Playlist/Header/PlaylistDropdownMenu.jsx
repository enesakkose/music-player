import React from 'react'
import Icon from '@/components/Icon'
import { DropdownMenu, DropdownMenuItem } from '@/components/DropdownMenu'
import { modal } from '@/utils'
import { publishPlaylist } from '@/firebase/db'

function PlaylistDropdownMenu({playlist}) {
  return (
    <DropdownMenu 
      className='playlistActionMenu'
      btnClassName='playlistDropdownBtn'
      btn={<Icon name='ThreeDots' size={32}/>}
    >
      <DropdownMenuItem 
        text='Edit Details' 
        onClick={() => modal('PlaylistInfoModal', playlist)}
      />
      <DropdownMenuItem 
        text={playlist.publish ? 'Remove from profile' : 'Add to profile'} 
        onClick={() => publishPlaylist(playlist.id, !playlist.publish)}
      />
      <DropdownMenuItem 
        text='Delete' 
        onClick={() => modal('PlaylistDeleteModal', playlist)}
      />
    </DropdownMenu>
  )
}

export default PlaylistDropdownMenu