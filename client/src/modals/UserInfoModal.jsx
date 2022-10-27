import React from 'react'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import CustomInput from '@/components/CustomInput'
import ModalCloseBtn from '@/modals/ModalCloseBtn'
import { Form, Formik } from 'formik'
import { updateUser, auth } from '@/firebase/auth'
import { userInfoSchema } from '@/forms/schemas'
import { useDispatch } from 'react-redux'
import { login } from '@/store/auth'
import { closeModalHandle } from '@/utils'
import '@/modals/UserInfoModal.scss'

function UserInfoModal({data, outClickRef}) {
  const dispatch = useDispatch()
  const onSubmit = async(values, action) => {
    const update = await updateUser({
      displayName: values.displayName, 
      photoURL: values.avatar
    })
    
    dispatch(login({
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email,
      emailVerified: auth.currentUser.emailVerified,
      photoURL: auth.currentUser.photoURL,
      uid: auth.currentUser.uid
    }))
    {update && closeModalHandle()}
  }

  return (
    <div ref={outClickRef} className='modal__content userInfoModal'>
      <header className='userInfoModal__header'>
        <h3 className='userInfoModal__header__title'>
          User Details
        </h3>
        <ModalCloseBtn/>
      </header>
      
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
            {auth.currentUser.photoURL !== null && <img 
              className='userInfoModal__form__img'  
              src={auth.currentUser.photoURL} 
              alt="userPhoto" 
            />}
            {auth.currentUser.photoURL === null && <Icon name='Avatar' size='100%' style={{ color: 'gray'}}/>}
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