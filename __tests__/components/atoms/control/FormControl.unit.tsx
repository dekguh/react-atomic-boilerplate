import React from 'react'
import { screen, render } from '@testing-library/react'
import FormControl from '@/components/atoms/control/FormControl'

describe('FormControl unit testing', () => {
  test('FormControl is rendered', () => {
    render(<FormControl>form control rendered</FormControl>)
    expect(screen.getByText('form control rendered')).toBeDefined()
  })

  it('FormControl can add the controlProps', () => {
    render(<FormControl controlProps={{ fullWidth: true, role: 'formControl' }}>
      form control rendered
    </FormControl>)
    const styles = window.getComputedStyle(screen.getByRole('formControl'))

    expect(styles.width).toEqual('100%')
  })

  it('FormControl can add the labelProps', () => {
    render(<FormControl labelProps={{ children: 'Form Label' }}>
      form control rendered
    </FormControl>)

    expect(screen.getByText('Form Label')).toBeDefined()
  })

  it('FormControl can add the helperProps', () => {
    render(<FormControl helperProps={{ children: 'helper text' }}>
      form control rendered
    </FormControl>)

    expect(screen.getByText('helper text')).toBeDefined()
  })
})