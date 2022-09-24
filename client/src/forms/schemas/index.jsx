import * as yup from 'yup'

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
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

export const loginSchema = yup.object().shape({
    username: yup
      .string()
      .required("Please enter email or username"),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required("Please enter your password")  
})

export const signupSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter a valid email')
      .required("Please enter a valid email"),
    username: yup
      .string()
      .min(6, 'Username must be at least 6 characters')
      .required("Please enter an username"),
    password: yup
      .string()
      .min(8,'')
      .matches(passwordRegex, {message: passwordRules})
      .required(passwordRules),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], "Passwords must match")
})