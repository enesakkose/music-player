import React from 'react'
import BrandLogo from '@/components/BrandLogo'
import Or from '@/Pages/Auth/Or'
import GoogleBtn from '@/Pages/Auth/GoogleBtn'
import { Link } from 'react-router-dom'



function Login({changeContent, setChangeContent}) {
  return (
    <div className='auth__content'>
      <BrandLogo size={35}/>
      <button className='auth__content__googleBtn'>
        <GoogleBtn text='CONTINUE WITH GOOGLE'/>
      </button>
      <Or/>
      <div className='auth__content__inputs'>
        <div className='auth__content__username inputContain'>
          <span className='auth__content__input__title'>
            Email address or username
          </span>
          <input 
            type="text" 
            name='username' 
            placeholder='Email address or username'
          />
        </div>
        <div className='auth__content__password inputContain'>
          <span className='auth__content__input__title'>
            Password
          </span>
          <input 
            type="password" 
            name="password"
            placeholder='Password'
          />
        </div>
        <div className='auth__content__actionBtns'>
          <Link className='auth__content__actionBtns__forgot' to='/'>
            Forgot your password?
          </Link>
          <button className='auth__content__actionBtns__login'>
            LOGIN
          </button>
        </div>
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
    </div>
  )
}

export default Login