import React from 'react'
import { useSelector } from 'react-redux'

export const useValidUser = (id) =>  {
  const { profile: { uid } } = useSelector(state => state.profiles)
  const validUser = uid === id
  
  return validUser ? true : false 
}

