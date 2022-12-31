import React from 'react'
import CustomInput from '@/components/CustomInput'
import LightBtn from '@/components/LightBtn'
import Cover from '@/modals/PlaylistInfoModal/Form/Cover'
import { Form, Formik } from 'formik'
import { updatePlaylist } from '@/firebase/db'
import { closeModalHandle } from '@/utils'
import { playlistInfoSchema } from '@/forms/schemas'

function PlaylistInfoModalForm({playlistInfo}) {
  const onSubmit = async (values) => {
    const updatePlaylistProcess = await updatePlaylist(playlistInfo.id, {
      name: values.playlistName
    })
    { updatePlaylistProcess && closeModalHandle() }
  }

  return (
    <Formik
        initialValues={{ playlistName: playlistInfo?.name }}
        validationSchema={playlistInfoSchema}
        onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className='playlistInfoModal__form'>
          <Cover playlistInfo={playlistInfo}/>
          <div className='playlistInfoModal__form__input'>
            <CustomInput
              labelClassName='playlistInfoModal__form__input__item'
              type='text'
              name='playlistName'
              inputTitle='Playlist Name'
              placeholder='Playlist Name'
              autoComplete='off'
            />
            <LightBtn
              text='Save'
              type='submit'
              className={`submitBtn ${isSubmitting ? 'isSubmitting' : ''}`}
            />
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default PlaylistInfoModalForm