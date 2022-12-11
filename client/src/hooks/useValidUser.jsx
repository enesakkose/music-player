import React from 'react'
import { useSelector } from 'react-redux'

export const useValidUser = (id) =>  {
  const { user } = useSelector(state => state.auth)
  const validUser = user.uid === id
  
  return validUser ? true : false 
}

