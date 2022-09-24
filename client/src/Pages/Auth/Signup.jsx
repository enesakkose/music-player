import React from 'react'
import BrandLogo from '@/components/BrandLogo'
import GoogleBtn from '@/Pages/Auth/GoogleBtn'
import Or from '@/Pages/Auth/Or'
import CustomInput from '@/components/CustomInput'
import { signupSchema } from '@/forms/schemas'
import { Form, Formik } from 'formik'
import { login } from '@/firebase'


function Signup({changeContent, setChangeContent}) {

  const onSubmit = async(values, actions) => {
    console.log(values)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    actions.resetForm()
  }

  return (
    <div className='auth__content'>
      <BrandLogo  size={35}/>
      <button className='auth__content__googleBtn'>
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
            <CustomInput
              labelClassName='auth__content__username inputContain'
              type='password'
              name='password'
              placeholder='Create a password'
            >
              <span className='auth__content__input__title'>
                Password
              </span>
            </CustomInput>
            <CustomInput
              labelClassName='auth__content__username inputContain'
              type='password'
              name='confirmPassword'
              placeholder='Confirm password'
            >
              <span className='auth__content__input__title'>
                Confirm Password
              </span>
            </CustomInput>
            <button className={`auth__content__signupBtn ${isSubmitting ? 'submittingBtn' : ''}`}>
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