import React from 'react'
import CustomInput from '@/components/UI/CustomInput'
import PasswordInput from '@/components/UI/PasswordInput'
import Button from '@/components/UI/Button'
import Layout from '@/Pages/Auth/Layout'
import { signupSchema } from '@/forms/schemas'
import { Form, Formik } from 'formik'
import { createUser, updateUser } from 'firebase/auth'
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
    <Layout>
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
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              disabled={isSubmitting}
            >
              Signup
            </Button>
          </Form>
        )}
      </Formik>
      <Button color='primary' variant='contained' onClick={handleChangeContent}>
        Do you have an account?
      </Button>
    </Layout>
  )
}

export default Signup