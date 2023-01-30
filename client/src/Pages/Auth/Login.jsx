import React from 'react'
import LightBtn from '@/components/LightBtn'
import CustomInput from '@/components/CustomInput'
import PasswordInput from '@/components/PasswordInput'
import ForgetPassword from '@/components/ForgetPassword'
import SwitchBtn from '@/components/SwitchBtn'
import ContentLayout from '@/Pages/Auth/ContentLayout'
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
    <ContentLayout>
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
            <PasswordInput title='Password' placeholder='Password'/>
            <LightBtn
              type='submit'
              text='Login'
              disabled={isSubmitting}
              className={styles.submitBtn}
            />
          </Form>
        )}
      </Formik>
      <ForgetPassword className={styles.forgetPassword}/>
      <SwitchBtn
        title="Don't have an account?"
        text='SIGN UP'
        onClick={handleChangeContent}
      />
    </ContentLayout>
  )
}

export default Login