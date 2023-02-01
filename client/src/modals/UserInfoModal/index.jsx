import React from 'react'
import clsx from 'clsx'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import Avatar from '@/components/Avatar'
import LightBtn from '@/components/LightBtn'
import CustomInput from '@/components/CustomInput'
import Header from '@/components/Modal/Header'
import ModalWrapper from '@/components/Wrappers/ModalWrapper'
import { Form, Formik } from 'formik'
import { closeModalHandle } from '@/utils'
import { useSelector } from 'react-redux'
import { updateUser } from '@/firebase/auth'
import { userInfoSchema } from '@/forms/schemas'
import { uploadImg, deleteImg } from '@/firebase/storage'
import styles from '@/modals/UserInfoModal/UserInfoModal.module.scss'

function UserInfoModal({outClickRef}) {
  const { profile: userInfo } = useSelector(state => state.profiles)

  const onSubmit = async(values) => {
    const update = await updateUser({
      displayName: values.displayName
    })
    {update && closeModalHandle()}
  }

  const handleUpload = async(e) => {
    await uploadImg(e.target.files[0], userInfo.uid, true)
    e.target.value = null
  }

  const removePrflImg = async() => {
    await deleteImg(userInfo.photoURL)
    await updateUser({
      photoURL: ''
    })
  }

  return (
    <ModalWrapper ref={outClickRef} className={styles.userInfoModal}>
      <Header title='User Details'/>
      <Formik
        initialValues={{ displayName: userInfo.displayName }}
        onSubmit={onSubmit}
        validationSchema={userInfoSchema}
      >
        {({isSubmitting}) => (
          <Form className={styles.form}>
            <label htmlFor='file' className={styles.profileImg}>
              <Avatar 
                src={userInfo.photoURL} 
                size='11.25rem'
              />
              <div className={styles.pencilBtn}>
                <Icon name='Pencil' size={50}/>
                <Button
                  disabled={userInfo.photoURL === null || userInfo.photoURL === ''} 
                  type='button'
                  onClick={removePrflImg} 
                  className={styles.remove}
                >
                  Remove Photo
                </Button>
              </div>
              <input id='file' type='file' onChange={handleUpload} accept="image/png, image/jpeg" hidden/>
            </label>
            <div className={styles.inputs}>
              <CustomInput
                type='text'
                name='displayName'
                inputTitle='Name'
                placeholder='Name'
                autoComplete='off'
              />
              <LightBtn 
                type='submit' 
                text='Save'
                disabled={isSubmitting}
                className={styles.submitBtn}
              />
            </div>
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  )
}

export default UserInfoModal