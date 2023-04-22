import React from 'react'

// COMPONENTS
import Button from './index'

// CONSTANTS & UTILS
import colors from '@/constants/colors'
import { hexToRgb } from '@/utils/string'

it('should can add children & rendered', () => {
  cy.mount(<Button>primary</Button>)
  cy.get('button').should('contains.text', 'primary')
})

it('should the background color primary is match with theme color', () => {
  cy.mount(<Button variant='contained' color='primary'>primary</Button>)
  cy.get('button').should('have.css', 'background-color', hexToRgb(colors.primary.main))
})

it('should the background color secondary is match with theme color', () => {
  cy.mount(<Button variant='contained' color='secondary'>secondary</Button>)
  cy.get('button').should('have.css', 'background-color', hexToRgb(colors.secondary.main))
})