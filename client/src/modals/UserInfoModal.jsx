import React from 'react'
import clsx from 'clsx'
import CustomInput from '@/components/CustomInput'
import LightBtn from '@/components/LightBtn'
import Icon from '@/components/Icon'
import ModalHeader from '@/components/Modal/ModalHeader'
import Avatar from '@/components/Avatar'
import { uploadImg, deleteImg } from '@/firebase/storage'
import { Form, Formik } from 'formik'
import { updateUser } from '@/firebase/auth'
import { userInfoSchema } from '@/forms/schemas'
import { useSelector } from 'react-redux'

import { closeModalHandle } from '@/utils'
import '@/modals/UserInfoModal.scss'

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
    <div ref={outClickRef} className='modalContent userInfoModal'>
      <ModalHeader title='User Details'/>
      
      <Formik
        initialValues={{ 
          displayName: userInfo.displayName,
        }}
        onSubmit={onSubmit}
        validationSchema={userInfoSchema}
      >
        {({isSubmitting}) => (
          <Form className='userInfoModal__form'>
            <label htmlFor='file' className='profileImgChange'>
              <Avatar 
                src={userInfo.photoURL} 
                size='11.25rem'
              />
              <div className="pencilBtn">
                <Icon name='Pencil' size={50}/>
                <button
                  disabled={userInfo.photoURL === null || userInfo.photoURL === ''} 
                  type='button'
                  onClick={removePrflImg} 
                  className='pencilBtn__remove'
                >
                  Remove Photo
                </button>
              </div>
              <input id='file' type='file' onChange={handleUpload} accept="image/png, image/jpeg" hidden/>
            </label>
            <div className="userInfoModal__form__inputs">
              <CustomInput
                labelClassName='userInfoModal__form__inputs__input'
                type='text'
                name='displayName'
                inputTitle='Name'
                placeholder='Name'
                autoComplete='off'
              />
              <LightBtn 
                type='submit' 
                text='Save' 
                className={clsx('submitBtn', isSubmitting ? 'submittingBtn' : '')}
              />

            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default UserInfoModal