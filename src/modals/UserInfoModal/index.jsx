import React from 'react'
import Button from '@/components/UI/Button'
import Icon from '@/components/UI/Icon'
import Avatar from '@/components/Avatar'
import CustomInput from '@/components/UI/CustomInput'
import Header from '@/components/UI/Modal/Header'
import ModalWrapper from '@/components/Wrappers/ModalWrapper'
import { Form, Formik } from 'formik'
import { closeModalHandle } from '@/utils/helpers'
import { useSelector } from 'react-redux'
import { updateUser } from 'firebase/auth'
import { userInfoSchema } from '@/forms/schemas'
import { uploadImg, deleteImg } from 'firebase/storage'
import styles from '@/modals/UserInfoModal/UserInfoModal.module.scss'

function UserInfoModal({ outClickRef }) {
  const { profile: userInfo } = useSelector(state => state.profiles)

  const onSubmit = async (values) => {
    const update = await updateUser({
      displayName: values.displayName
    })
    { update && closeModalHandle() }
  }

  const handleUpload = async (e) => {
    await uploadImg(e.target.files[0], userInfo.uid, true)
    e.target.value = null
  }

  const removePrflImg = async () => {
    await deleteImg(userInfo.photoURL)
    await updateUser({
      photoURL: ''
    })
  }

  return (
    <ModalWrapper ref={outClickRef} className={styles.userInfoModal}>
      <Header title='User Details' />
      <Formik
        initialValues={{ displayName: userInfo.displayName }}
        onSubmit={onSubmit}
        validationSchema={userInfoSchema}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <label htmlFor='file' className={styles.profileImg}>
              <Avatar
                src={userInfo.photoURL}
                size='11.25rem'
              />
              <div className={styles.pencilBtn}>
                <Icon name='Pencil' size={50} />
                <Button
                  disabled={userInfo.photoURL === null || userInfo.photoURL === ''}
                  type='button'
                  onClick={removePrflImg}
                  variant='underline'
                >
                  Remove Photo
                </Button>
              </div>
              <input id='file' type='file' onChange={handleUpload} accept="image/png, image/jpeg" hidden />
            </label>
            <div className={styles.inputContainer}>
              <CustomInput
                type='text'
                name='displayName'
                inputTitle='Name'
                placeholder='Name'
                autoComplete='off'
              />
              <Button
                type='submit'
                variant='contained'
                color='primary'
                align='end'
                disabled={isSubmitting}
              >
                Save
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  )
}

export default UserInfoModal