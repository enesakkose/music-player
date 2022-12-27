import React from 'react'
import Icon from '@/components/Icon'
import { useGetPlaylist } from '@/hooks/useGetPlaylist'
import { updatePlaylist } from '@/firebase/db'
import { uploadImg, deleteImg } from '@/firebase/storage'

function Cover({ playlistInfo }) {
  const { coverURL } = useGetPlaylist(playlistInfo.id) || {}

  const handleUpload = async (e) => {
    await uploadImg(e.target.files[0], playlistInfo.id)
    e.target.value = null
  }

  const deleteImgHandle = async () => {
    await deleteImg(coverURL)
    await updatePlaylist(playlistInfo.id, {
      coverURL: null
    })
  }

  const songsInPlaylist = playlistInfo.addedSongs.length > 0
  const coverImage = playlistInfo?.addedSongs[0]?.track?.images?.coverart

  return (
    <div className='playlistInfoModal__form__img'>
      {coverURL === null
        ? <Icon name='Music' size={64} />
        : <img src={coverURL} alt="img" />
      }
      {coverURL === null && songsInPlaylist &&
        <img src={coverImage} alt="img" />
      }
      <div className='imgChange'>
        <label className='imgChange__btn'>
          <Icon name='Pencil' size={20} />
          <input 
            type='file' 
            onChange={handleUpload} 
            accept="image/png, image/jpeg" 
            hidden 
          />
        </label>
        <button
          disabled={coverURL === null}
          type='button'
          onClick={deleteImgHandle}
          className='imgChange__btn'
        >
          <Icon name='Trash' size={20} />
        </button>
      </div>
    </div>
  )
}

export default Cover