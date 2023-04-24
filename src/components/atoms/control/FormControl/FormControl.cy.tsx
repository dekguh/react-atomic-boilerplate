import React from 'react'

// COMPONENTS
import FormControl from '.'
import TextField from '@/components/atoms/input/TextField'

it('it should can add FormControl props [fullWidth] & rendered', () => {
  cy.mount(<FormControl
    controlProps={{
      fullWidth: true,
    }}
  >
    <TextField />
  </FormControl>)
})

it('it should can add InputLabel props [children]', () => {
  cy.mount(<FormControl
    controlProps={{
      fullWidth: true,
    }}
    labelProps={{
      children: 'label props'
    }}
  >
    <TextField />
  </FormControl>)
})

it('it should can add FormHelperText props [children]', () => {
  cy.mount(<FormControl
    controlProps={{
      fullWidth: true,
      error: true,
    }}
    labelProps={{
      children: 'label',
    }}
    helperProps={{
      children: 'some error message',
    }}
  >
    <TextField error={true} />
  </FormControl>)
})