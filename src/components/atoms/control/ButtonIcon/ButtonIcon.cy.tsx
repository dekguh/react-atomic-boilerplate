/* eslint-disable no-undef */
import React from 'react'

// COMPONENTS
import ButtonIcon from '.'

// MUI ICONS
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'

// CONSTANTS & UTILS
import colors from '@/constants/colors'
import { hexToRgb } from '@/utils/string'

it('should can add a icon & rendered', () => {
  cy.mount(<ButtonIcon><NotificationsActiveIcon /></ButtonIcon>)
  cy.get('button').children().get('[data-testid="NotificationsActiveIcon"]')
})

it('should the icon color primary is match with theme color', () => {
  cy.mount(<ButtonIcon color='primary'><NotificationsActiveIcon /></ButtonIcon>)
  cy.get('button').children().get('[data-testid="NotificationsActiveIcon"]').should('have.css', 'color', hexToRgb(colors.primary.main))
})
  
it('should the icon color secondary is match with theme color', () => {
  cy.mount(<ButtonIcon color='secondary'><NotificationsActiveIcon /></ButtonIcon>)
  cy.get('button').children().get('[data-testid="NotificationsActiveIcon"]').should('have.css', 'color', hexToRgb(colors.secondary.main))
})