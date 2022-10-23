import React from 'react'
import BrandLogo from '@/components/BrandLogo'
import GoogleBtn from '@/Pages/Auth/GoogleBtn'
import Or from '@/Pages/Auth/Or'
import CustomInput from '@/components/CustomInput'
import PasswordInput from '@/components/PasswordInput'
import { signupSchema } from '@/forms/schemas'
import { Form, Formik } from 'formik'
import { createUser, loginWithGoogle } from '@/firebase'
import { useNavigate } from 'react-router-dom'

function Signup({changeContent, setChangeContent}) {
  
  const navigate = useNavigate()

  const onSubmit = async(values, actions) => {
    const user = await createUser(values.email, values.password)
    if(user) return navigate('/', { replace: true })
    {user && actions.resetForm()}
  }

  const continueGoogle = async() => {
    const user = await loginWithGoogle()
    if(user) return navigate('/', { replace: true })
  }

  return (
    <div className='auth__content'>
      <BrandLogo  size={35}/>
      <button onClick={continueGoogle} className='auth__content__googleBtn'>
        <GoogleBtn text='SIGNUP WITH GOOGLE'/>
      </button>
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
              placeholder='Email addres'
            >
              <span className='auth__content__input__title'>
                Email address
              </span>
            </CustomInput>
            <CustomInput
              labelClassName='auth__content__username inputContain'
              type='username'
              name='username'
              placeholder='Create an username'
            >
              <span className='auth__content__input__title'>
                Username
              </span>
            </CustomInput>
            <PasswordInput 
              title='Create a Password' 
              placeholder='Create a password'
            />
            <PasswordInput 
              title='Confirm Password' 
              name='confirmPassword' 
              placeholder='Confirm password'
            />
            <button type='submit' className={`auth__content__signupBtn ${isSubmitting ? 'submittingBtn' : ''}`}>
              SIGNUP
            </button>
          </Form>
        )}
      </Formik>
      
      <div className='auth__content__loginContent'>
        <span className='auth__content__loginContent__text'>
          Do you have an account?
        </span>
        <button 
          className='auth__content__loginContent__btn'
          onClick={() => setChangeContent(!changeContent)}
        >
          Log In
        </button>
      </div>
    </div>
  )
}

export default Signup