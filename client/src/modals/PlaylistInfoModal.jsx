import React from 'react'
import CustomInput from '@/components/CustomInput'
import Icon from '@/components/Icon'
import LightBtn from '@/components/LightBtn'
import ModalHeader from '@/components/Modal/ModalHeader'
import { useFindPlaylist } from '@/hooks/useFindPlaylist'
import { uploadImg, deleteImg } from '@/firebase/storage'
import { closeModalHandle } from '@/utils'
import { updatePlaylist } from '@/firebase/db'
import { Form, Formik } from 'formik'
import { playlistInfoSchema } from '@/forms/schemas'
import '@/modals/PlaylistInfoModal.scss'

function PlaylistInfoModal({data: playlistId, outClickRef}) {
  const playlistInfo = useFindPlaylist(playlistId)
  
  const handleUpload = async(e) => {
    await uploadImg(e.target.files[0], playlistInfo.id)
    e.target.value = null
  }
  const onSubmit = async(values) => {
    const updatePlaylistProcess = await updatePlaylist(playlistInfo.id, {
      name: values.playlistName
    })
    {updatePlaylistProcess && closeModalHandle()}
  }

  const deleteImgHandle = async() => {
    await deleteImg(playlistInfo.coverURL)
    await updatePlaylist(playlistId,{
      coverURL: null
    })
  }

  const songsInPlaylist = playlistInfo?.addedSongs?.length > 0
  const coverImage = playlistInfo?.addedSongs[0]?.track?.images?.coverart

  return (
    <div ref={outClickRef} className='modalContent playlistInfoModal'>
      <ModalHeader title='Edit Details'/>
      <Formik 
        initialValues={{ playlistName: playlistInfo?.name }}
        validationSchema={playlistInfoSchema}
        onSubmit={onSubmit}
      >
        {({isSubmitting}) => (
          <Form className='playlistInfoModal__form'>
            <div className="playlistInfoModal__form__img">
              {playlistInfo.coverURL === null && <Icon name='Music' size={64}/>}
              {playlistInfo.coverURL === null && songsInPlaylist && <img src={coverImage} alt="img"/>}
              {playlistInfo.coverURL !== null && <img src={playlistInfo.coverURL} alt="img"/>}
              <div className='imgChange'>
              <label className='imgChange__btn'>
                <Icon name='Pencil' size={20}/>
                <input type='file' onChange={handleUpload} accept="image/png, image/jpeg" hidden/>
              </label>
              <button type='button' onClick={deleteImgHandle} className='imgChange__btn'>
                <Icon name='Trash' size={20}/>
              </button>
              </div>
            </div>
            <div className='playlistInfoModal__form__input'>
              <CustomInput
                labelClassName='playlistInfoModal__form__input__item'
                type='text'
                name='playlistName'
                placeholder='Playlist Name'
                autoComplete='off'
              >
                <span className='playlistInfoModal__form__input__item__name'>
                  Playlist Name
                </span>
              </CustomInput>
              <LightBtn
                text='Save' 
                type='submit' 
                className={`submitBtn ${isSubmitting ? 'isSubmitting' : ''}`}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default PlaylistInfoModal