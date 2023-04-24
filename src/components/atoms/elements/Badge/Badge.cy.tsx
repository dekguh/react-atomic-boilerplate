import React from 'react'

// COMPONENTS
import Badge from '.'

// CONSTANTS & UTILS
import colors from '@/constants/colors'
import { hexToRgb } from '@/utils/string'

// ICON
import MailIcon from '@mui/icons-material/Mail'

it('should can add icon & rendered', () => {
  cy.mount(<Badge>
    <MailIcon />
  </Badge>)

  cy.get('.MuiBadge-root').should('be.visible')
  cy.get('[data-testid="MailIcon"]').should('be.visible')
})

it('should it color primary is match with theme color', () => {
  cy.mount(<Badge color='primary' variant='dot'>
    <MailIcon />
  </Badge>)

  cy.get('.MuiBadge-badge').should('have.css', 'background-color', hexToRgb(colors.primary.main))
})

it('should it color secondary is match with theme color', () => {
  cy.mount(<Badge color='secondary' variant='dot'>
    <MailIcon />
  </Badge>)
  
  cy.get('.MuiBadge-badge').should('have.css', 'background-color', hexToRgb(colors.secondary.main))
})