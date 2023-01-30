import React from 'react'
import CustomInput from '@/components/CustomInput'
import PasswordInput from '@/components/PasswordInput'
import SwitchBtn from '@/components/SwitchBtn'
import LightBtn from '@/components/LightBtn'
import ContentLayout from '@/Pages/Auth/ContentLayout'
import { signupSchema } from '@/forms/schemas'
import { Form, Formik } from 'formik'
import { createUser, updateUser } from '@/firebase/auth'
import { useNavigate } from 'react-router-dom'
import styles from '@/Pages/Auth/Auth.module.scss'

function Signup({ setChangeContent }) {
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const user = await createUser(values.email, values.password)
    await updateUser({ displayName: values.username }, false)
    if (user) navigate('/', { replace: true })
  }

  const handleChangeContent = () => {
    setChangeContent(prev => !prev)
  }

  return (
    <ContentLayout>
      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={signupSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.inputs}>
            <CustomInput
              type='email'
              name='email'
              inputTitle='Email address'
              placeholder='Email addres'
            />
            <CustomInput
              type='username'
              inputTitle='Username'
              name='username'
              placeholder='Create an username'
            />
            <PasswordInput
              title='Create a Password'
              placeholder='Create a password'
            />
            <PasswordInput
              title='Confirm Password'
              name='confirmPassword'
              placeholder='Confirm password'
            />
            <LightBtn
              type='submit'
              text='Signup'
              disabled={isSubmitting}
              className={styles.submitBtn}
            />
          </Form>
        )}
      </Formik>
      <SwitchBtn
        title="Do you have an account?"
        text='LOGIN'
        onClick={handleChangeContent}
      />
    </ContentLayout>
  )
}

export default Signup