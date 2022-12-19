import React from 'react'
import BrandLogo from '@/components/BrandLogo'
import GoogleBtn from '@/Pages/Auth/GoogleBtn'
import Or from '@/Pages/Auth/Or'
import CustomInput from '@/components/CustomInput'
import clsx from 'clsx'
import PasswordInput from '@/components/PasswordInput'
import ContentChangeBtn from '@/Pages/Auth/ContentChangeBtn'
import LightBtn from '@/components/LightBtn'
import { signupSchema } from '@/forms/schemas'
import { Form, Formik } from 'formik'
import { createUser, updateUser } from '@/firebase/auth'
import { useNavigate } from 'react-router-dom'

function Signup({changeContent, setChangeContent}) {
  const navigate = useNavigate()

  const onSubmit = async(values) => {
    const user = await createUser(values.email, values.password)
    await updateUser({
      displayName: values.username
    }, false)
    if(user) navigate('/', { replace: true })
  }

  return (
    <div className='auth__content'>
      <BrandLogo size={35}/>
      <GoogleBtn text='SIGNUP WITH GOOGLE'/>
      <Or/>
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
          <Form className='auth__content__inputs'>
            <CustomInput
              labelClassName='auth__content__email inputContain'
              type='email'
              name='email'
              inputTitle='Email address'
              placeholder='Email addres'
            />
            <CustomInput
              labelClassName='auth__content__username inputContain'
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
              className={clsx('submitBtn', isSubmitting ? 'submittingBtn' : '' )}
            />
          </Form>
        )}
      </Formik>
      <ContentChangeBtn
        title="Do you have an account?"
        text='LOGIN'
        onClick={() => setChangeContent(!changeContent)}
      />
    </div>
  )
}

export default Signup