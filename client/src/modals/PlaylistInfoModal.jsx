import React from 'react'
import CustomInput from '@/components/CustomInput'
import Icon from '@/components/Icon'
import ModalHeader from '@/modals/ModalHeader'
import { closeModalHandle } from '@/utils'
import { updatePlaylist } from '@/firebase/db'
import { Form, Formik } from 'formik'
import { playlistInfoSchema } from '@/forms/schemas'
import '@/modals/PlaylistInfoModal.scss'

function PlaylistInfoModal({data, outClickRef}) {

  const onSubmit = async(values) => {
    const updatePlaylistProcess = await updatePlaylist(data.id, {
      name: values.playlistName,
      coverURL: values.coverURL
    })
    {updatePlaylistProcess && closeModalHandle()}
  }

  const dataSongs = data?.addedSongs?.length > 0
  const coverImage = data?.addedSongs[0]?.track?.images?.coverart

  return (
    <div ref={outClickRef} className='playlistInfoModal'>
      <ModalHeader title='Edit Details'/>
      <Formik 
        initialValues={{ playlistName: data?.name, coverURL: data?.coverURL }}
        validationSchema={playlistInfoSchema}
        onSubmit={onSubmit}
      >
        {({isSubmitting}) => (
          <Form className='playlistInfoModal__form'>
            <div className="playlistInfoModal__form__img">
              {data.coverURL === null && <Icon name='Music' size={64}/>}
              {data.coverURL === null && dataSongs && <img src={coverImage} alt="img"/>}
              {data.coverURL !== null && <img src={data.coverURL} alt="img"/>}
              <button type='button'  className='playlistInfoModal__form__img__changeBtn'>
                <Icon name='Pencil' size={16}/>
              </button>
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
              <CustomInput
                labelClassName='playlistInfoModal__form__input__item'
                type='text'
                name='coverURL'
                placeholder='Cover'
                autoComplete='off'
              >
                <span className='playlistInfoModal__form__input__item__name'>
                  Cover Url
                </span>
              </CustomInput>
              <button 
                type='submit' 
                className={`playlistInfoModal__form__input__submit ${isSubmitting ? 'isSubmitting' : ''}`}
              >
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default PlaylistInfoModal