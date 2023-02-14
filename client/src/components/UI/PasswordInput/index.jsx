import React, { useState } from 'react'
import Icon from '@/components/UI/Icon'
import CustomInput from '@/components/UI/CustomInput'
import Button from '@/components/UI/Button'
import styles from '@/components/UI/PasswordInput/PasswordInput.module.scss'

function PasswordInput({ title, name = 'password', ...props }) {
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
      <Button className={styles.eyeBtn} type="button" onClick={handleShowPassword}>
        <Icon name={showPassword ? 'CloseEye' : 'Eye'} size={22} />
      </Button>
    </div>
  )
}

export default PasswordInput