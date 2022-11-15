import React, { useState } from 'react'
import Icon from '@/components/Icon'
import CustomInput from '@/components/CustomInput'
import '@/components/PasswordInput.scss'

function PasswordInput({title, name='password', ...rest}) {

    const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='passwordInput'>
    <CustomInput
      labelClassName='passwordInput__label inputContain'
      type={showPassword ? 'text' : 'password'}
      name={name}
      className='passwordInput__label__input'
      {...rest}
    >
      <span className='passwordInput__label__title'>
        {title}
      </span>
    </CustomInput>
      <button type="button" onClick={() => setShowPassword(!showPassword)} className='eyeBtn'>
        <Icon name={showPassword ? 'CloseEye' : 'Eye'} size={22}/>
      </button>
    </div>
  )
}

export default PasswordInput