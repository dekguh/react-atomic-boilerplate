import React from 'react'

// COMPONENTS
import FormControlLabel from '.'
import Checkbox from '@/components/atoms/input/Checkbox'
import Radio from '@/components/atoms/input/Radio'
import Switch from '@/components/atoms/input/Switch'

it('it should can add radio', () => {
  cy.mount(<FormControlLabel
    label='label radio'
    control={<Radio />}
  />)
  cy.get('.MuiFormControlLabel-label').should('have.text', 'label radio')
  cy.get('input.PrivateSwitchBase-input').click()
})

it('it should can add checkbox', () => {
  cy.mount(<FormControlLabel
    label='label checkbox'
    control={<Checkbox />}
  />)
  cy.get('.MuiFormControlLabel-label').should('have.text', 'label checkbox')
  cy.get('input.PrivateSwitchBase-input').click()
})

it('it should can add switch', () => {
  cy.mount(<FormControlLabel
    label='label switch'
    control={<Switch />}
  />)
  cy.get('.MuiFormControlLabel-label').should('have.text', 'label switch')
  cy.get('input.PrivateSwitchBase-input').click()
})