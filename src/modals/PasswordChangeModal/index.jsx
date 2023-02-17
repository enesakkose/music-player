import React from 'react'
import ModalWrapper from '@/components/Wrappers/ModalWrapper'
import CustomInput from '@/components/UI/CustomInput'
import ForgetPassword from '@/components/ForgetPassword'
import Header from '@/components/UI/Modal/Header'
import Button from '@/components/UI/Button'
import { useSelector } from 'react-redux'
import { updateUserPassword, updateMail } from '@/firebase/auth'
import { passwordChangeSchema, emailChangeSchema } from '@/forms/schemas'
import { closeModalHandle } from '@/utils/helpers'
import { Formik, Form } from 'formik'
import styles from '@/modals/PasswordChangeModal/PasswordChangeModal.module.scss'

function PasswordChangeModal({ outClickRef }) {
  const { profile: { email } } = useSelector(state => state.profiles)

  const passwordChange = async (values) => {
    const update = await updateUserPassword(values.password, values.newPassword)
    { update && closeModalHandle() }
  }

  const emailChange = async (values) => {
    const update = await updateMail(values.confirmPassword, values.newEmail)
    { update && closeModalHandle() }
  }

  return (
    <ModalWrapper ref={outClickRef} className={styles.passwordChangeModal}>
      <Header title='Personal Info Change' />
      <div className={styles.content}>
        <div className={styles.password}>
          <Formik
            initialValues={{
              password: '',
              newPassword: '',
              confirmPassword: ''
            }}
            validationSchema={passwordChangeSchema}
            onSubmit={passwordChange}
          >
            {({ isSubmitting }) => (
              <Form className={styles.form}>
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
                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                  disabled={isSubmitting}
                >
                  Confirm
                </Button>
              </Form>
            )}
          </Formik>
          <ForgetPassword />
        </div>
        <div className={styles.email}>
          <Formik
            initialValues={{ newEmail: email, confirmPassword: '' }}
            validationSchema={emailChangeSchema}
            onSubmit={emailChange}
          >
            {({ isSubmitting }) => (
              <Form className={styles.form}>
                <CustomInput
                  type='email'
                  name='newEmail'
                  inputTitle='Email'
                  placeholder='Email'
                  autoComplete='off'
                />
                <CustomInput
                  type='password'
                  name='confirmPassword'
                  inputTitle='Password'
                  placeholder='Password'
                  autoComplete='off'
                />
                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                  disabled={isSubmitting}
                >
                  Confirm
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </ModalWrapper>
  )
}

export default PasswordChangeModal