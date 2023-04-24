/* eslint-disable no-undef */
import React from 'react'

// COMPONENTS
import Fab from '.'

// MUI ICONS 
import MapIcon from '@mui/icons-material/Map'

// CONSTANTS & UTILS
import colors from '@/constants/colors'
import { hexToRgb } from '@/utils/string'

it('should can add a icon & rendered', () => {
  cy.mount(<Fab><MapIcon fontSize='small'/></Fab>)
  cy.get('button').children().get('[data-testid="MapIcon"]')
})

it('should the background color primary is match with theme color', () => {
  cy.mount(<Fab color='primary'><MapIcon fontSize='small'/></Fab>)
  cy.get('button').should('have.css', 'background-color', hexToRgb(colors.primary.main))
})
  
it('should the background color secondary is match with theme color', () => {
  cy.mount(<Fab color='secondary'><MapIcon fontSize='small'/></Fab>)
  cy.get('button').should('have.css', 'background-color', hexToRgb(colors.secondary.main))
})