import React from 'react'
import ModalCloseBtn from '@/modals/ModalCloseBtn'
import clsx from 'clsx'
import CustomInput from '@/components/CustomInput'
import PasswordInput from '@/components/PasswordInput'
import { updateUserPassword, updateMail } from '@/firebase/auth'
import { passwordChangeSchema, emailChangeSchema } from '@/forms/schemas'
import { auth } from '@/firebase/auth'
import { Formik, Form } from 'formik'
import '@/modals/PasswordChangeModal.scss'

function PasswordChangeModal({ outClickRef }) {

  const passwordChange = async(values) => {
    await updateUserPassword(values.password, values.newPassword)
  }
  const emailChange = async(values) => {
    await updateMail(values.confirmPassword, values.newEmail)
  }

  return (
    <div ref={outClickRef} className='passwordChangeModal'>
      <header className='passwordChangeModal__header'>
        <h3 className='passwordChangeModal__header__title'>
          Password Change
        </h3>
        <ModalCloseBtn/>
      </header>
      <div className="passwordChangeModal__content">
        <div className='passwordChangeModal__content__password'>
          <h4 className='passwordChangeModal__content__password__title'>Password</h4>
          <Formik
            initialValues={{ 
              password: '', 
              newPassword: '', 
              confirmPassword: ''
            }}
            validationSchema={passwordChangeSchema}
            onSubmit={passwordChange}
          >
            {({isSubmitting}) => (
              <Form className='passwordChangeModal__content__password__form'>
                <PasswordInput 
                  title='Current Password' 
                  placeholder='Current Password'
                  name='password'
                  autoComplete='off'
                />
                <PasswordInput 
                  title='New Password' 
                  placeholder='New Password'
                  name='newPassword'
                  autoComplete='off'
                />
                <PasswordInput 
                  title='Confirm Password' 
                  placeholder='Confirm Password'
                  name='confirmPassword'
                  autoComplete='off'
                />

                <button 
                  type='submit' 
                  className={clsx('passwordChangeModal__content__password__form__submitBtn', isSubmitting ? 'submittingBtn' : '')}
                >
                  Confirm
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className='passwordChangeModal__content__email'>
          <h4 className='passwordChangeModal__content__email__title'>Email</h4>
          <Formik
            initialValues={{ newEmail: auth.currentUser.email, confirmPassword: '' }}
            validationSchema={emailChangeSchema}
            onSubmit={emailChange}
          >
            {({isSubmitting}) => (
              <Form className='passwordChangeModal__content__email__form'>
                <CustomInput
                  labelClassName='passwordChangeModal__content__email__form__label'
                  type='email'
                  name='newEmail'
                  placeholder='Email'
                  autoComplete='off'
                >
                  <span className='passwordChangeModal__content__email__form__label__input__name'>
                    Email
                  </span>
                </CustomInput>
                <CustomInput
                  labelClassName='passwordChangeModal__content__email__form__label'
                  type='password'
                  name='confirmPassword'
                  placeholder='Password'
                  autoComplete='off'
                >
                  <span className='passwordChangeModal__content__email__form__label__input__name'>
                    Password
                  </span>
                </CustomInput>
                <button 
                  type='submit' 
                  className={clsx('passwordChangeModal__content__email__form__submitBtn',
                    isSubmitting ? 'submittingBtn' : ''
                  )}
                >
                  Confirm
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default PasswordChangeModal