import React from 'react'

// COMPONENTS
import List from '.'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

// ICONS
import SendIcon from '@mui/icons-material/Send'

it('it should list can add children', () => {
  cy.mount(<List>
    <ListItemButton>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>

      <ListItemText primary='Send' />
    </ListItemButton>
  </List>)
})

it('it should list can add props', () => {
  cy.mount(<List subheader={<>header</>} disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
  
      <ListItemText primary='Send' />
    </ListItemButton>
  </List>)

  cy.get('.MuiList-root').should('include.text', 'header')
})