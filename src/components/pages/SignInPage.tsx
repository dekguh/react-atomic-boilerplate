import React from 'react'
import Router from 'next/router'

// COMPONENTS
import AuthLayout from '@/components/layouts/AuthLayout'
import FormSignIn from '@/components/organisms/auth/FormSignIn'

// REDUX
import { useDispatch } from 'react-redux'
import { userIsAuthAct, userTokenAct } from '@/store/slice/authSlice'

// SERVICES
import { useUserLoginMutation } from '@/services/authService'

const SignInPage = () => {
  const dispatch = useDispatch()
  const [proccessAuth] = useUserLoginMutation()

  const handleLoginSubmit = async (values : { [key: string]: string | number | boolean; }) => {
    const response = await proccessAuth({
      username: values.email,
      password: values.password
    }).unwrap() as { [key: string]: string | number | boolean; }

    if (response?.status === 400) {
      console.log('failed')
    } else if (response?.token) {
      console.log('success')
      dispatch(userTokenAct(response?.token))
      dispatch(userIsAuthAct(true))
      Router.push('/')
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