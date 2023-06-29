import React from 'react'

// COMPONENTS
import AuthLayout from '@/components/layouts/AuthLayout'
import FormSignUp from '@/components/organisms/auth/FormSignUp'

const SignUp = () => {
  return (
    <AuthLayout>
      <FormSignUp
        getParamsObject={() => null}
      />
    </AuthLayout>
  )
}

export default SignUp