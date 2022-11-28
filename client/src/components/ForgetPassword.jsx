import React, { useState } from 'react'
import CustomInput from '@/components/CustomInput'
import LightBtn from '@/components/LightBtn'
import clsx from 'clsx'
import { resetPassword } from '@/firebase/auth'
import { Formik, Form } from 'formik'
import { resetPasswordEmailSchema } from '@/forms/schemas'
import '@/components/ForgetPassword.scss'

function ForgetPassword({ className }) {
  const [showForm, setShowForm] = useState(false)

  const onSubmit = async(values, actions) => {
    await resetPassword(values.email)
    actions.resetForm()
  }

  return (
    <div className={clsx('forgetPassword', className)}>
      <button 
        className='forgetPasswordBtn' 
        type='button' 
        onClick={() => setShowForm(!showForm)}
      >
        Forgot Password?
      </button>
      <div>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={onSubmit}
        validationSchema={resetPasswordEmailSchema}
      >
        {({isSubmitting}) => (
          <Form className={clsx('forgetPassword__form', showForm ? 'showForm' : '')}>
            <CustomInput
              labelClassName='forgetPassword__form__label'
              type='email'
              name='email'
              inputTitle='Email'
              placeholder='Email'
              autoComplete='off'
            />
            <LightBtn 
              text='Send'
              type='submit'
              className={clsx('submitBtn', isSubmitting ? 'submittingBtn' : '')} 
            />
          </Form>
        )}
      </Formik>
      </div>
    </div>
  )
}

export default ForgetPassword