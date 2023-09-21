import React from 'react'

// COMPONENTS
import AuthLayout from '@/components/layouts/AuthLayout'
import FormSignIn from '@/components/organisms/auth/FormSignIn'

const SignInPage = () => {
  return (
    <AuthLayout>
      <FormSignIn
        getParamsObject={() => null}
      />
    </AuthLayout>
  )
}

export default SignInPage