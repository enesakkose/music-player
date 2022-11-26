import React from 'react'
import clsx from 'clsx'
import CustomInput from '@/components/CustomInput'
import PasswordInput from '@/components/PasswordInput'
import ModalHeader from '@/components/Modal/ModalHeader'
import LightBtn from '@/components/LightBtn'
import { updateUserPassword, updateMail } from '@/firebase/auth'
import { passwordChangeSchema, emailChangeSchema } from '@/forms/schemas'
import { auth } from '@/firebase/auth'
import { closeModalHandle } from '@/utils'
import { Formik, Form } from 'formik'
import '@/modals/PasswordChangeModal.scss'

function PasswordChangeModal({ outClickRef }) {

  const passwordChange = async(values) => {
    const update = await updateUserPassword(values.password, values.newPassword)
    {update && closeModalHandle()}
  }
  const emailChange = async(values) => {
    const update = await updateMail(values.confirmPassword, values.newEmail)
    {update && closeModalHandle()}
  }

  return (
    <div ref={outClickRef} className='passwordChangeModal'>
      <ModalHeader title='Personal Info Change'/>
      <div className="passwordChangeModal__content">
        <div className='passwordChangeModal__content__password'>
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

                <LightBtn 
                  type='submit' 
                  text='Confirm'
                  className={clsx('submitBtn', isSubmitting ? 'submittingBtn' : '')}
                />
              </Form>
            )}
          </Formik>
        </div>
        <div className='passwordChangeModal__content__email'>
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
                <LightBtn
                  text='Confirm'
                  type='submit' 
                  className={clsx('submitBtn',
                    isSubmitting ? 'submittingBtn' : ''
                  )}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default PasswordChangeModal