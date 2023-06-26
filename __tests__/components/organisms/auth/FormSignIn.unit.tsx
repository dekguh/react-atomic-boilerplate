import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import FormSignIn from '@/components/organisms/auth/FormSignIn/FormSignIn'

describe('FormSignIn unit testing', () => {
  test('FormSignIn is rendered', () => {
    render(<FormSignIn getParamsObject={() => null}/>)
    expect(screen.getByTestId('formSignInId')).toBeInTheDocument()
  })

  test('return message error when fields are not valid', async () => {
    render(<FormSignIn getParamsObject={() => null}/>)
    fireEvent.click(screen.getByTestId('buttonSubmitId'))
    const itemsText = await screen.findAllByText(/this field must filled/i)
    expect(itemsText).toHaveLength(2)
  })

  test('prop getParamsObject should return params of fields', () => {
    let paramsObject : { [key: string]: string | number | boolean; } = { email: '', password: '' }
    render(<FormSignIn getParamsObject={value => paramsObject = value}/>)

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
    fireEvent.click(screen.getByTestId('buttonSubmitId'))
    expect(paramsObject?.email).toEqual('dek@dek.id')
    expect(paramsObject?.password).toEqual('123456')
  })
})