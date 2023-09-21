import React from 'react'

// COMPONENTS
import AuthLayout from '@/components/layouts/AuthLayout'
import FormSignUp from '@/components/organisms/auth/FormSignUp'

const SignUpPage = () => {
  return (
    <AuthLayout>
      <FormSignUp
        getParamsObject={() => null}
      />
    </AuthLayout>
  )
}

export default SignUpPage