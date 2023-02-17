import React from 'react'
import Icon from '@/components/UI/Icon'
import Button from '@/components/UI/Button'
import CustomInput from '@/components/UI/CustomInput'
import { useSelector } from 'react-redux'
import { updatePlaylist } from '@/firebase/db'
import { uploadImg, deleteImg } from '@/firebase/storage'
import styles from '@/modals/PlaylistInfoModal/Form/Form.module.scss'

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
    <div className={styles.imgContainer}>
      {coverURL === null
        ? <Icon name='Music' size={64} />
        : <img src={coverURL} alt="cover" />
      }
      {coverURL === null && songsInPlaylist &&
        <img src={coverImage} alt="cover" />
      }
      <div className={styles.imgChange}>
        <CustomInput
          name='file'
          type='file'
          onChange={handleUpload}
          accept="image/png, image/jpeg"
          hidden
        >
          <Icon name='Pencil' size={20} />
        </CustomInput>
        <Button
          disabled={coverURL === null}
          onClick={deleteImgHandle}
          className={styles.imgChangeBtn}
        >
          <Icon name='Trash' size={20} />
        </Button>
      </div>
    </div>
  )
}

export default Cover