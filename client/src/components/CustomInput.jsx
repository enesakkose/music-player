import React from 'react'
import { useField } from 'formik'
import '@/components/CustomInput.scss'

function CustomInput({labelClassName, children, ...props}) {

  const [ field, meta ] = useField(props)
    
  return (
    <>
      <label className={labelClassName}>
        {children}
        <input 
          {...field} 
          {...props}
          className={meta.touched && meta.error ? 'inputError' : ''}
        />
        {meta.touched && meta.error && <p className='errorText'>{meta.error}</p>}
      </label>
    </>
  )
}

export default CustomInput