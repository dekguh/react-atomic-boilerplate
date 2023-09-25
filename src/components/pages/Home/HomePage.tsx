import React from 'react'
import Router from 'next/router'

// REDUX
import { useDispatch } from 'react-redux'
import { userLogoutAct } from '@/store/slice/authSlice'

// COMPONENTS
import Button from '../../atoms/control/Button'

const HomePage = () => {
  const dispatch = useDispatch()
  
  return (
    <Button variant='contained' onClick={() => {
      dispatch(userLogoutAct())
      Router.push('/sign-in')
    }}>
        logout
    </Button>
  )
}

export default HomePage