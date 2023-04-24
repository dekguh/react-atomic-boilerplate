import React from 'react'

// COMPONENTS
import Chip from '.'

// CONSTANTS & UTILS
import colors from '@/constants/colors'
import { hexToRgb } from '@/utils/string'

it('should can add children & rendered', () => {
  cy.mount(<Chip label='this chip'/>)

  cy.get('.MuiChip-root').should('be.visible')
  cy.get('.MuiChip-label').should('have.text', 'this chip')
})

it('should it color primary is match with theme color', () => {
  cy.mount(<Chip color='primary' label='this chip'/>)

  cy.get('.MuiChip-root').should('have.css', 'background-color', hexToRgb(colors.primary.main))
})

it('should it color secondary is match with theme color', () => {
  cy.mount(<Chip color='secondary' label='this chip'/>)
  
  cy.get('.MuiChip-root').should('have.css', 'background-color', hexToRgb(colors.secondary.main))
})