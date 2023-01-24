import React from 'react'
import Icon from '@/components/Icon'
import { useSelector } from 'react-redux'
import { updatePlaylist } from '@/firebase/db'
import { uploadImg, deleteImg } from '@/firebase/storage'


function Cover({ playlistId }) {
  const { playlists } = useSelector(state => state.playlist)
  const { id, coverURL, addedSongs } = playlists.find(playlist => playlist.id === playlistId)


  const handleUpload = async (e) => {
    await uploadImg(e.target.files[0], id)
    e.target.value = null
  }

  const deleteImgHandle = async () => {
    await deleteImg(coverURL)
    await updatePlaylist(id, {
      coverURL: null
    })
  }

  const songsInPlaylist = addedSongs.length > 0
  const coverImage = addedSongs[0]?.track?.images?.coverart

  return (
    <div className='playlistInfoModal__form__img'>
      {coverURL === null
        ? <Icon name='Music' size={64} />
        : <img src={coverURL} alt="cover" />
      }
      {coverURL === null && songsInPlaylist &&
        <img src={coverImage} alt="cover" />
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