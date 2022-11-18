import React from 'react'
import clsx from 'clsx'
import CustomInput from '@/components/CustomInput'
import ModalHeader from '@/components/Modal/ModalHeader'
import Avatar from '@/components/Avatar'
import { Form, Formik } from 'formik'
import { updateUser, auth } from '@/firebase/auth'
import { userInfoSchema } from '@/forms/schemas'
import { user } from '@/utils'
import { closeModalHandle } from '@/utils'
import '@/modals/UserInfoModal.scss'

function UserInfoModal({data, outClickRef}) {

  const onSubmit = async(values) => {
    const update = await updateUser({
      displayName: values.displayName, 
      photoURL: values.avatar
    })
    user()
    {update && closeModalHandle()}
  }

  return (
    <div ref={outClickRef} className='modalContent userInfoModal'>
      <ModalHeader title='User Details'/>
      
      <Formik
        initialValues={{ 
          displayName: data.displayName,
          avatar: data.photoURL
        }}
        onSubmit={onSubmit}
        validationSchema={userInfoSchema}
      >
        {({isSubmitting}) => (
          <Form className='userInfoModal__form'>
            <Avatar src={auth.currentUser.photoURL} size='100%'/>
            <div className="userInfoModal__form__inputs">
              <CustomInput
                labelClassName='userInfoModal__form__inputs__input'
                type='text'
                name='displayName'
                placeholder='Name'
                autoComplete='off'
              >
                <span className='userInfoModal__form__inputs__input__span'>
                  Name
                </span>
              </CustomInput>

              <CustomInput
                labelClassName='userInfoModal__form__inputs__input'
                type='text'
                name='avatar'
                placeholder='Photo URL'
                autoComplete='off'
              >
                <span className='userInfoModal__form__inputs__input__span'>
                  Photo Url
                </span>
              </CustomInput>

              <button type='submit' 
                className={clsx('userInfoModal__form__inputs__submit', isSubmitting ? 'submittingBtn' : '')}
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

export default UserInfoModal