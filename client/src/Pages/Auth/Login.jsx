import React from 'react'
import Button from '@/components/UI/Button'
import CustomInput from '@/components/UI/CustomInput'
import PasswordInput from '@/components/PasswordInput'
import ForgetPassword from '@/components/ForgetPassword'
import Layout from '@/Pages/Auth/Layout'
import { Form, Formik } from 'formik'
import { loginSchema } from '@/forms/schemas'
import { handleLogin } from '@/firebase/auth'
import { useNavigate } from 'react-router-dom'
import styles from '@/Pages/Auth/Auth.module.scss'


function Login({ setChangeContent }) {
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const user = await handleLogin(values.username, values.password)
    if (user) navigate('/', { replace: true })
  }

  const handleChangeContent = () => {
    setChangeContent(prev => !prev)
  }

  return (
    <Layout>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.inputs}>
            <CustomInput
              type='text'
              name='username'
              inputTitle='Email address or username'
              placeholder='Email address or username'
            />
            <PasswordInput title='Password' placeholder='Password' />
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              disabled={isSubmitting}
              className={styles.submitBtn}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <ForgetPassword className={styles.forgetPassword} />
      <Button color='primary' variant='contained' onClick={handleChangeContent}>
        Don't have an account?
      </Button>
    </Layout>
  )
}

export default Login