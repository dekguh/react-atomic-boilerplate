import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import FormSignUp from '@/components/organisms/auth/FormSignUp/FormSignUp'

describe('FormSignUp unit testing', () => {
  test('FormSignUp is rendered', () => {
    render(<FormSignUp getParamsObject={() => null}/>)
    expect(screen.getByTestId('formSignUpId')).toBeInTheDocument()
  })

  test('return message error when fields are not valid', async () => {
    render(<FormSignUp getParamsObject={() => null}/>)
    fireEvent.click(screen.getByTestId('buttonSubmitId'))
    const itemsText = await screen.findAllByText(/this field must filled/i)
    expect(itemsText).toHaveLength(3)

    fireEvent.change(screen.getByTestId('inputPasswordId'), {
      target: {
        value: '123456'
      }
    })
    fireEvent.change(screen.getByTestId('inputRePasswordId'), {
      target: {
        value: 'tes123'
      }
    })

    fireEvent.click(screen.getByTestId('buttonSubmitId'))
    const itemsText2 = await screen.findAllByText(/confirm password must same/i)
    expect(itemsText2).toHaveLength(1)
  })

  test('prop getParamsObject should return params of fields', () => {
    let paramsObject : { [key: string]: string | number | boolean; } = { email: '', password: '', confirmPassword: '' }
    render(<FormSignUp getParamsObject={value => paramsObject = value}/>)

    fireEvent.change(screen.getByTestId('inputEmailId'), {
      target: {
        value: 'dek@dek.id'
      }
    })
    fireEvent.change(screen.getByTestId('inputPasswordId'), {
      target: {
        value: '123456'
      }
    })
    fireEvent.change(screen.getByTestId('inputRePasswordId'), {
      target: {
        value: '123456'
      }
    })
    fireEvent.click(screen.getByTestId('buttonSubmitId'))
    expect(paramsObject?.email).toEqual('dek@dek.id')
    expect(paramsObject?.password).toEqual('123456')
    expect(paramsObject?.rePassword).toEqual('123456')
  })
})