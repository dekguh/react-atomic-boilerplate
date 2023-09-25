import React from 'react'
import Stack from '@mui/material/Stack'
import SnackbarLayout from './SnackbarLayout'

const AuthLayout = (props : { children: JSX.Element | React.ReactNode }) => {
  const { children } = props

  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      height='100vh'
    >
      <SnackbarLayout>
        {children}
      </SnackbarLayout>
    </Stack>
  )
}

export default AuthLayout