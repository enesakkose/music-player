import React, { useState } from 'react'
import clsx from 'clsx'
import LightBtn from '@/components/LightBtn'
import CustomInput from '@/components/CustomInput'
import { Formik, Form } from 'formik'
import { resetPassword } from '@/firebase/auth'
import { resetPasswordEmailSchema } from '@/forms/schemas'
import styles from '@/components/ForgetPassword/ForgetPassword.module.scss'

function ForgetPassword({ className }) {
  const [showForm, setShowForm] = useState(false)

  const onSubmit = async(values, actions) => {
    await resetPassword(values.email)
    actions.resetForm()
  }

  const handleShowForm = () => {
    setShowForm(prev => !prev)
  }

  return (
    <div className={clsx(styles.forgetPassword, className)}>
      <button className={styles.showFormBtn} type='button' onClick={handleShowForm}>
        Forgot Password?
      </button>
      <div>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={onSubmit}
        validationSchema={resetPasswordEmailSchema}
      >
        {({isSubmitting}) => (
          <Form className={clsx(styles.form, showForm ? styles.showForm : '')}>
            <CustomInput
              type='email'
              name='email'
              inputTitle='Email'
              placeholder='Email'
              autoComplete='off'
            />
            <LightBtn 
              text='Send'
              type='submit'
              disabled={isSubmitting}
              className={clsx(styles.submitBtn)} 
            />
          </Form>
        )}
      </Formik>
      </div>
    </div>
  )
}

export default ForgetPassword