import React from 'react'
import Icon from '@/components/UI/Icon'
import DropdownMenu from '@/components/UI/DropdownMenu'
import DropdownMenuItem from '@/components/UI/DropdownMenu/DropdownMenuItem'
import { modal } from '@/utils/helpers'
import { publishPlaylist } from 'firebase/db'

function PlaylistDropdownMenu({ playlist }) {
  return (
    <DropdownMenu
      className='playlistActionMenu'
      openBtnClassName='playlistDropdownBtn'
      openBtn={<Icon name='ThreeDots' size={32} />}
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