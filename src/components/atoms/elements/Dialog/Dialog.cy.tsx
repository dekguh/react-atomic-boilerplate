import React from 'react'
import Box from '@mui/material/Box'

// COMPONENTS
import Dialog from '.'

it('should dialogProps is worked', () => {
  cy.mount(<Dialog dialogProps={{ open: true }}></Dialog>)

  cy.get('.MuiDialog-root').should('be.visible')
})

it('should can add a header', () => {
  cy.mount(<Dialog dialogProps={{ open: true }}
    header={<Box data-testid='header-testid'>is rendered and worked</Box>}
  />)

  cy.get('[data-testid="header-testid"]').should('be.visible')
})

it('should can add a content', () => {
  cy.mount(<Dialog dialogProps={{ open: true }}
    content={<Box data-testid='content-testid'>is rendered and worked</Box>}
  />)
  
  cy.get('[data-testid="content-testid"]').should('be.visible')
})

it('should can add a content', () => {
  cy.mount(<Dialog dialogProps={{ open: true }}
    content={<Box data-testid='content-testid'>is rendered and worked</Box>}
  />)
    
  cy.get('[data-testid="content-testid"]').should('be.visible')
})

it('should can add a footer', () => {
  cy.mount(<Dialog dialogProps={{ open: true }}
    footer={<Box data-testid='footer-testid'>is rendered and worked</Box>}
  />)
      
  cy.get('[data-testid="footer-testid"]').should('be.visible')
})