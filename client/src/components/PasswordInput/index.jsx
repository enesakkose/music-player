import React, { useState } from 'react'
import Icon from '@/components/Icon'
import CustomInput from '@/components/CustomInput'
import styles from '@/components/PasswordInput/PasswordInput.module.scss'

function PasswordInput({title, name='password', ...props}) {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(prev => !prev)
  }

  return (
    <div className={styles.passwordInput}>
      <CustomInput
        type={showPassword ? 'text' : 'password'}
        name={name}
        inputTitle={title}
        {...props}
      />
      <button className={styles.eyeBtn} type="button" onClick={handleShowPassword}>
        <Icon name={showPassword ? 'CloseEye' : 'Eye'} size={22}/>
      </button>
    </div>
  )
}

export default PasswordInput