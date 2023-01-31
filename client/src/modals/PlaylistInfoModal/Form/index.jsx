import React from 'react'
import CustomInput from '@/components/CustomInput'
import LightBtn from '@/components/LightBtn'
import Cover from '@/modals/PlaylistInfoModal/Form/Cover'
import { Form, Formik } from 'formik'
import { updatePlaylist } from '@/firebase/db'
import { closeModalHandle } from '@/utils'
import { playlistInfoSchema } from '@/forms/schemas'
import styles from '@/modals/PlaylistInfoModal/Form/Form.module.scss'

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
        <Form className={styles.form}>
          <Cover playlistId={playlistInfo.id}/>
          <div className={styles.inputContainer}>
            <CustomInput
              labelClassName={styles.label}
              type='text'
              name='playlistName'
              inputTitle='Playlist Name'
              placeholder='Playlist Name'
              autoComplete='off'
            />
            <LightBtn
              text='Save'
              type='submit'
              disabled={isSubmitting}
              className={styles.submitBtn}
            />
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default PlaylistInfoModalForm