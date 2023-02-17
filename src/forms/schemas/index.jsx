import * as yup from 'yup'

/*const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
//min 8 characters, 1 upperCase, 1 lowerCase, 1 number

const passwordRules =  
    <>
    * Least 8 characters
    <br/>
    * 1 upper case letter
    <br/> 
    * 1 lower case letter
    <br/>
    * 1 numeric digit
    <br/>
    </>

const passwordChangeRules = 
<>* Least 8 characters, * 1 upper case, * 1 lower case, * 1 numeric digit</>*/

export const loginSchema = yup.object().shape({
    username: yup
      .string()
      .required("Please enter email or username"),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required("Please enter your password")  
})

export const signupSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter a valid email')
      .required("Please enter a valid email"),
    username: yup
      .string()
      .max(14, 'Username must be at max 14 characters')
      .required("Please enter an username"),
    password: yup
      .string()
      .min(6, 'Min 6 characters')
      .required("Please enter your password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], "Passwords must match")
})

export const playlistInfoSchema = yup.object().shape({
    playlistName: yup
      .string()
      .required('Playlist name is required')
})

export const userInfoSchema = yup.object().shape({
    displayName: yup
      .string()
      .max(14, 'Max 14 characters')
      .required('Display Name is required')
      .nullable()
})

export const passwordChangeSchema = yup.object().shape({
    password: yup
      .string()
      .min(6,'Min 6 characters'),
    newPassword: yup
      .string()
      .min(6, 'Min 6 characters')
      .required("Please enter your password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword'), null], "Passwords must match")
})

export const emailChangeSchema = yup.object().shape({
    newEmail: yup
      .string()
      .email('Please enter a valid email')
      .required("Please enter a valid email"),
    confirmPassword: yup
      .string()
      .min(6,'Min 6 characters')
      .required('Min 6 characters')
})

export const resetPasswordEmailSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter a valid email')
      .required("Please enter a valid email")
})

export const commentSchema = yup.object().shape({
    comment: yup
      .string()
      .required('')
})