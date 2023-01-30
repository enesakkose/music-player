import React from 'react'
import clsx from 'clsx'
import { useField } from 'formik'
import styles from '@/components/CustomInput/CustomInput.module.scss'

function CustomInput({ labelClassName, children, inputTitle = false, className, ...props }) {
  const [ field, meta ] = useField(props)
    
  return (
    <label className={clsx(styles.label, labelClassName)}>
      {inputTitle && <span className={styles.title}>
        {inputTitle}
      </span>}
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