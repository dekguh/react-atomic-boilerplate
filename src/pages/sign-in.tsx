import React from 'react'

// COMPONENTS
import AuthLayout from '@/components/layouts/AuthLayout'
import FormSignIn from '@/components/organisms/auth/FormSignIn'

const SignIn = () => {
  return (
    <AuthLayout>
      <FormSignIn
        getParamsObject={() => null}
      />
    </AuthLayout>
  )
}

export default SignIn