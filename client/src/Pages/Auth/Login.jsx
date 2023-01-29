import React from 'react'
import BrandLogo from '@/components/BrandLogo'
import Or from '@/Pages/Auth/Or'
import GoogleBtn from '@/Pages/Auth/GoogleBtn'
import CustomInput from '@/components/CustomInput'
import ForgetPassword from '@/components/ForgetPassword'
import ContentChangeBtn from '@/Pages/Auth/ContentChangeBtn'
import LightBtn from '@/components/LightBtn'
import clsx from 'clsx'
import PasswordInput from '@/components/PasswordInput'
import { loginSchema } from '@/forms/schemas'
import { Form, Formik } from 'formik'
import { handleLogin } from '@/firebase/auth'
import { useNavigate } from 'react-router-dom'


function Login({changeContent, setChangeContent}) {
  const navigate = useNavigate()

  const onSubmit = async(values) => {
    const user = await handleLogin(values.username, values.password)
    if(user) navigate('/', { replace: true })
  }
  
  return (
    <div className='auth__content'>
      <BrandLogo size={35}/>
      <GoogleBtn text='CONTINUE WITH GOOGLE'/>
      <Or/>
      <Formik
        initialValues={{ username: "", password: ""}}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {({isSubmitting}) => (
          <Form className='auth__content__inputs'>
            <CustomInput
              labelClassName='auth__content__username inputContain'
              type='text'
              name='username'
              inputTitle='Email address or username'
              placeholder='Email address or username'
            />
            <PasswordInput title='Password' placeholder='Password'/>
            <LightBtn 
              type='submit'
              text='Login'
              className={clsx('submitBtn', isSubmitting ? 'submittingBtn' : '')}
            />
          </Form>
        )}
      </Formik>
      <ForgetPassword className='loginForgetPassword'/>
      <ContentChangeBtn
        title="Don't have an account?"
        text='SIGN UP'
        onClick={() => setChangeContent(!changeContent)}
      />
    </div>
  )
}

export default Login