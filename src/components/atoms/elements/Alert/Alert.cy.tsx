import React from 'react'

// COMPONENTS
import Alert from '.'

it('it should can add alert props [severity]', () => {
  cy.mount(<Alert
    alertProps={{
      severity: 'error'
    }}
  />)
  cy.get('.MuiPaper-root').should('have.class', 'MuiAlert-standardError')
})

it('it should  can add a alert title props', () => {
  cy.mount(<Alert
    alertProps={{
      severity: 'error'
    }}
    alertTitleProps={{
      children: 'Title'
    }}
  />)
  cy.get('.MuiAlert-message').should('include.text', 'Title')
})

it('it should can add a children', () => {
  cy.mount(<Alert
    alertProps={{
      severity: 'error'
    }}
    alertTitleProps={{
      children: 'Title'
    }}
  >
    add children
  </Alert>)
  cy.get('.MuiAlert-message').should('include.text', 'add children')
})

it('it should can be a error alert', () => {
  cy.mount(<Alert
    alertProps={{
      severity: 'error'
    }}
    alertTitleProps={{
      children: 'Title'
    }}
  >
        text error
  </Alert>)
  cy.get('.MuiAlert-message').should('include.text', 'text error')
  cy.get('.MuiPaper-root').should('have.class', 'MuiAlert-standardError')
})

it('it should can be a success alert', () => {
  cy.mount(<Alert
    alertProps={{
      severity: 'success'
    }}
    alertTitleProps={{
      children: 'Title'
    }}
  >
        text success
  </Alert>)
  cy.get('.MuiAlert-message').should('include.text', 'text success')
  cy.get('.MuiPaper-root').should('have.class', 'MuiAlert-standardSuccess')
})

it('it should can be a info alert', () => {
  cy.mount(<Alert
    alertProps={{
      severity: 'info'
    }}
    alertTitleProps={{
      children: 'Title'
    }}
  >
        text info
  </Alert>)
  cy.get('.MuiAlert-message').should('include.text', 'text info')
  cy.get('.MuiPaper-root').should('have.class', 'MuiAlert-standardInfo')
})