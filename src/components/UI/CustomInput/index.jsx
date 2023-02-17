import React from 'react'
import clsx from 'clsx'
import { useField } from 'formik'
import styles from '@/components/UI/CustomInput/CustomInput.module.scss'

function CustomInput({ children, inputTitle = false, className, ...props }) {
  const [ field, meta ] = useField(props)
    
  return (
    <label className={clsx(styles.label)}>
      {inputTitle && <span className={styles.title}>{inputTitle}</span>}
      {children}
      <input 
        {...field} 
        {...props}
        className={clsx(meta.touched && meta.error ? styles.error : '', className)}
      />
      {meta.touched && meta.error && <p className={styles.errorText}>{meta.error}</p>}
    </label>
  )
}

export default CustomInput