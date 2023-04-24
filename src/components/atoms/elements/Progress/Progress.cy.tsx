import React from 'react'

// COMPONENT
import Progress from './index'

it('should can by type linear', () => {
  cy.mount(<Progress
    type='linear'
    linearProps={{
      color: 'primary'
    }}
  />)
})

it('should can by type circular', () => {
  cy.mount(<Progress
    type='circular'
    circularProps={{
      color: 'secondary'
    }}
  />)
})