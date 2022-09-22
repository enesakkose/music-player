import React from 'react'
import BrandLogo from '@/components/BrandLogo'
import GoogleBtn from '@/Pages/Auth/GoogleBtn'
import Or from '@/Pages/Auth/Or'

function Signup({changeContent, setChangeContent}) {
  return (
    <div className='auth__content'>
      <BrandLogo  size={35}/>
      <button className='auth__content__googleBtn'>
        <GoogleBtn text='SIGNUP WITH GOOGLE'/>
      </button>
      <Or/>
      <div className='auth__content__inputs'>
        <div className='auth__content__email inputContain'>
          <span className='auth__content__input__title'>
            Email address
          </span>
          <input 
            type='email' 
            name='email' 
            placeholder='Email address'
          />
        </div>
        <div className='auth__content__username inputContain'>
          <span className='auth__content__input__title'>
            Username
          </span>
          <input 
            type='text' 
            name='username' 
            placeholder='Username'
          />
        </div>
        <div className='auth__content__password inputContain'>
          <span className='auth__content__input__title'>
            Create Password
          </span>
          <input 
            type='password' 
            name='password' 
            placeholder='Create Password'
          />
        </div>
      </div>
      <button className='auth__content__signupBtn'>
        SIGNUP
      </button>
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