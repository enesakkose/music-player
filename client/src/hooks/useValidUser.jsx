import React from 'react'
import { useSelector } from 'react-redux'

export const useValidUser = (id) =>  {
  const { profile } = useSelector(state => state.profiles)
  const validUser = profile?.uid === id
  
  return validUser ? true : false 
}

