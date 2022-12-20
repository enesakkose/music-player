import React from 'react'
import ModalWrapper from '@/components/Wrappers/ModalWrapper'
import clsx from 'clsx'
import CustomInput from '@/components/CustomInput'
import ForgetPassword from '@/components/ForgetPassword'
import ModalHeader from '@/components/Modal/ModalHeader'
import LightBtn from '@/components/LightBtn'
import { useSelector } from 'react-redux'
import { updateUserPassword, updateMail } from '@/firebase/auth'
import { passwordChangeSchema, emailChangeSchema } from '@/forms/schemas'
import { closeModalHandle } from '@/utils'
import { Formik, Form } from 'formik'
import '@/modals/PasswordChangeModal.scss'

function PasswordChangeModal({ outClickRef }) {
  const { profile: { email } } = useSelector(state => state.profiles)
  
  const passwordChange = async(values) => {
    const update = await updateUserPassword(values.password, values.newPassword)
    {update && closeModalHandle()}
  }

  const emailChange = async(values) => {
    const update = await updateMail(values.confirmPassword, values.newEmail)
    {update && closeModalHandle()}
  }

  return (
    <ModalWrapper ref={outClickRef} className='passwordChangeModal'>
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
                <CustomInput
                  type='password' 
                  inputTitle='Current Password' 
                  placeholder='Current Password'
                  name='password'
                  autoComplete='off'
                />
                <CustomInput
                  type='password' 
                  inputTitle='New Password' 
                  placeholder='New Password'
                  name='newPassword'
                  autoComplete='off'
                  />
                <CustomInput
                  type='password'
                  inputTitle='Confirm Password' 
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
          <ForgetPassword/>
        </div>
        <div className='passwordChangeModal__content__email'>
          <Formik
            initialValues={{ newEmail: email, confirmPassword: '' }}
            validationSchema={emailChangeSchema}
            onSubmit={emailChange}
          >
            {({isSubmitting}) => (
              <Form className='passwordChangeModal__content__email__form'>
                <CustomInput
                  labelClassName='passwordChangeModal__content__email__form__label'
                  type='email'
                  name='newEmail'
                  inputTitle='Email'
                  placeholder='Email'
                  autoComplete='off'
                />
                <CustomInput
                  labelClassName='passwordChangeModal__content__email__form__label'
                  type='password'
                  name='confirmPassword'
                  inputTitle='Password'
                  placeholder='Password'
                  autoComplete='off'
                />
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
    </ModalWrapper>
  )
}

export default PasswordChangeModal