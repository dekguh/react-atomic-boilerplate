import React from 'react'
import Stack from '@mui/material/Stack'

const AuthLayout = (props : { children: JSX.Element | React.ReactNode }) => {
  const { children } = props

  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      height='100vh'
    >{children}</Stack>
  )
}

export default AuthLayout