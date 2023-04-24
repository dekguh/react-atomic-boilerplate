import React from 'react'

// COMPONENTS
import Button from '@/components/atoms/control/Button'
import DialogSide from '.'
import Paper from '@/components/atoms/elements/Paper'

// MUIS
import Stack from '@mui/material/Stack'

const Example = () => {
  const pageRef = React.useRef(null)
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  
  return(
    <Stack ref={pageRef}>
      <Button data-testid='button-show' onClick={() => setIsOpen(current => !current)}>Show</Button>
  
      <DialogSide
        backdropProps={{
          open: isOpen,
          sx: {
            justifyContent: 'flex-start',
          }
        }}
        slideProps={{
          container: pageRef.current,
          in: isOpen,
          direction: 'right',
          children: (
            <Paper
              elevation={1}
              sx={{
                height: '100%',
                width: 350,
              }}
            >
              <Button data-testid='button-close' onClick={() => setIsOpen(current => !current)}>Close</Button>
            </Paper>
          )
        }}
      />
    </Stack>
  )
}

it('should opened when click the show button', () => {
  cy.mount(<Example />)

  cy.get('[data-testid="button-show"]').click()
  cy.get('.MuiPaper-root').should('be.visible')
})

it('should closed when click the close button', () => {
  cy.mount(<Example />)
  
  cy.get('[data-testid="button-show"]').click()
  cy.get('[data-testid="button-close"]').click()
  cy.get('.MuiPaper-root').should('not.be.visible')
})