import React, { useState } from 'react'
import clsx from 'clsx'
import CustomInput from '@/components/UI/CustomInput'
import Button from '@/components/UI/Button'
import { Formik, Form } from 'formik'
import { resetPassword } from '@/firebase/auth'
import { resetPasswordEmailSchema } from '@/forms/schemas'
import styles from '@/components/ForgetPassword/ForgetPassword.module.scss'

function ForgetPassword({ className }) {
  const [showForm, setShowForm] = useState(false)

  const onSubmit = async (values, actions) => {
    await resetPassword(values.email)
    actions.resetForm()
  }

  const handleShowForm = () => {
    setShowForm(prev => !prev)
  }

  return (
    <div className={clsx(styles.forgetPassword, className)}>
      <Button variant='underline' onClick={handleShowForm}>
        Forgot Password?
      </Button>
      <div>
        <Formik
          initialValues={{ email: '' }}
          onSubmit={onSubmit}
          validationSchema={resetPasswordEmailSchema}
        >
          {({ isSubmitting }) => (
            <Form className={clsx(styles.form, showForm ? styles.showForm : '')}>
              <CustomInput
                type='email'
                name='email'
                inputTitle='Email'
                placeholder='Email'
                autoComplete='off'
              />
              <Button
                variant='contained'
                color='secondary'
                type='submit'
                disabled={isSubmitting}
              >
                Send
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default ForgetPassword