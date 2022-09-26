import React from 'react'
import Icon from '@/components/Icon'
import { closeModalHandle } from '@/utils'
import { Form, Formik } from 'formik'
import CustomInput from '@/components/CustomInput'

function UserInfoModal({data, outClickRef}) {
  
  return (
    <div className='modal__content userInfoModal'>
      <header className='userInfoModal__header'>
        <h3 className='userInfoModal__header__title'>
          User Details
        </h3>
        <button 
          className='userInfoModal__header__closeBtn' 
          onClick={() => closeModalHandle()}
        >
          <Icon name='Close' size={25}/>
        </button>
      </header>
      
      <Formik
        initialValues={{ displayName: data.displayName, email: data.email}}
      >
        {({isSubmitting}) => (
          <Form ref={outClickRef} className='userInfoModal__form'>
            <img 
              className='userInfoModal__form__img'  
              src={data.photoURL} 
              alt="userPhoto" 
            />
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
                type='email'
                name='email'
                placeholder='Email'
                autoComplete='off'
              >
                <span className='userInfoModal__form__inputs__input__span'>
                  Email
                </span>
              </CustomInput>

              <button type='submit' className='userInfoModal__form__inputs__submit'>
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