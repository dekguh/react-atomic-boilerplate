import React from 'react'
import { screen, render } from '@testing-library/react'
import Button from '@/components/atoms/control/Button'

describe('Button atoms test', () => {
  it('should have a primary color matches with theme', () => {
    render(<Button data-testid='button-primary' color='primary' variant='contained'>button</Button>)

    expect(screen.getByTestId('button-primary'))
  })
})