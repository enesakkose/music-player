import React from 'react'
import CustomInput from '@/components/UI/CustomInput'
import Button from '@/components/UI/Button'
import Cover from '@/modals/PlaylistInfoModal/Form/Cover'
import { Form, Formik } from 'formik'
import { updatePlaylist } from 'firebase/db'
import { closeModalHandle } from '@/utils/helpers'
import { playlistInfoSchema } from '@/forms/schemas'
import styles from '@/modals/PlaylistInfoModal/Form/Form.module.scss'

function PlaylistInfoModalForm({ playlistInfo }) {

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
          <Cover playlistId={playlistInfo.id} />
          <div className={styles.inputContainer}>
            <CustomInput
              type='text'
              name='playlistName'
              inputTitle='Playlist Name'
              placeholder='Playlist Name'
              autoComplete='off'
            />
            <Button
              variant='contained'
              color='primary'
              type='submit'
              align='end'
              disabled={isSubmitting}
            >
              Save
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default PlaylistInfoModalForm