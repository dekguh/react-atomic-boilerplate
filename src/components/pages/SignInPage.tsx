import React from 'react'
import Router from 'next/router'

// COMPONENTS
import AuthLayout from '@/components/layouts/AuthLayout'
import FormSignIn from '@/components/organisms/auth/FormSignIn'

// REDUX
import { useDispatch } from 'react-redux'
import { userIsAuthAct, userTokenAct } from '@/store/slice/authSlice'
import { callSnackbar } from '@/store/slice/snackbarSlice'

// SERVICES
import { useUserLoginMutation } from '@/services/authService'

const SignInPage = () => {
  const dispatch = useDispatch()
  const [proccessAuth] = useUserLoginMutation()

  const handleLoginSubmit = async (values : { [key: string]: string | number | boolean; }) => {
    try {
      const response = await proccessAuth({
        username: values.email,
        password: values.password
      }).unwrap() as { [key: string]: string | number | boolean; }

      dispatch(userTokenAct(response?.token))
      dispatch(userIsAuthAct(true))
      Router.push('/')
    } catch (error) {
      dispatch(callSnackbar({
        severity: 'error',
        title: 'oops!',
        message: 'failed login, please check your email or password',
        isOpen: true,
      }))
    }
  }

  return (
    <AuthLayout>
      <FormSignIn
        getParamsObject={values => handleLoginSubmit(values)}
      />
    </AuthLayout>
  )
}

export default SignInPage