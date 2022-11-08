import React from 'react'
import clsx from 'clsx'
import { useField } from 'formik'
import '@/components/CustomInput.scss'

function CustomInput({labelClassName, children, className, ...props}) {

  const [ field, meta ] = useField(props)
    
  return (
    <>
      <label className={clsx('customInputLabel',labelClassName)}>
        {children}
        <input 
          {...field} 
          {...props}
          className={clsx(meta.touched && meta.error ? 'inputError' : '', className)}
        />
        {meta.touched && meta.error && <p className='errorText'>{meta.error}</p>}
      </label>
    </>
  )
}

export default CustomInput