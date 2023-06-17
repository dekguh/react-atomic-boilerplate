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
    <Stack data-testid='wrapperId' ref={pageRef}>
      <Button role='buttonDialog' onClick={() => setIsOpen(current => !current)}>Show</Button>
  
      <DialogSide
        backdropProps={{
          open: isOpen,
          sx: {
            justifyContent: 'flex-start',
          },
          role: 'dialogRole',
          className: isOpen ? 'isOpened' : 'isClosed'
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
              <Button role='buttonClose' onClick={() => setIsOpen(current => !current)}>Close</Button>
            </Paper>
          )
        }}
      />
    </Stack>
  )
}

export default Example