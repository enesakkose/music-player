import React, {useState} from 'react'
import BrandLogo from '@/components/BrandLogo'
import Or from '@/Pages/Auth/Or'
import GoogleBtn from '@/Pages/Auth/GoogleBtn'
import CustomInput from '@/components/CustomInput'
import PasswordInput from '@/components/PasswordInput'
import { Link } from 'react-router-dom'
import { loginSchema } from '@/forms/schemas'
import { Form, Formik } from 'formik'
import { handleLogin, loginWithGoogle } from '@/firebase/auth'
import { useNavigate } from 'react-router-dom'


function Login({changeContent, setChangeContent}) {
  const navigate = useNavigate()

  const onSubmit = async(values) => {
    const user = await handleLogin(values.username, values.password)
    if(user) navigate('/', { replace: true })
  }
  
  const continueGoogle = async() => {
    await loginWithGoogle()
    navigate('/', { replace: true })
  }

  return (
    <div className='auth__content'>
      <BrandLogo size={35}/>
      <button onClick={continueGoogle} className='auth__content__googleBtn'>
        <GoogleBtn text='CONTINUE WITH GOOGLE'/>
      </button>
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
              placeholder='Email address or username'
            >
              <span className='auth__content__input__title'>
                Email address or username
              </span>
            </CustomInput>
            <PasswordInput title='Password' placeholder='Password'/>
            <div className='auth__content__actionBtns'>
              <Link className='auth__content__actionBtns__forgot' to='/'>
                Forgot your password?
              </Link>
              <button type='submit' 
              className={`auth__content__actionBtns__login ${isSubmitting ? 'submittingBtn' : ''}`}>
                LOGIN
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <div className='auth__content__createAccount'>
        <span className='auth__content__createAccount__text'>
          Don't have an account?
        </span>
        <button 
          className='auth__content__createAccount__link' 
          onClick={() => setChangeContent(!changeContent)}
        >
          SIGN UP
        </button>
      </div>
    </div>
  )
}

export default Login