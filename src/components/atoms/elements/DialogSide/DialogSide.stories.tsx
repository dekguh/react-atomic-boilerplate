import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENTS
import Button from '@/components/atoms/control/Button'
import DialogSide from '.'
import Paper from '@/components/atoms/elements/Paper'

// MUIS
import Stack from '@mui/material/Stack'

export default {
  title: 'Atoms/Elements/Dialog Side',
  component: DialogSide,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Backdrop](https://mui.com/material-ui/react-backdrop) & [Slide](https://mui.com/material-ui/react-slide)'
      }
    }
  }
} as Meta<typeof DialogSide>

export const Example : StoryFn<typeof DialogSide> = () => {
  const pageRef = React.useRef(null)
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return(
    <Stack ref={pageRef}>
      <Button onClick={() => setIsOpen(current => !current)}>Show</Button>

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
              <Button onClick={() => setIsOpen(current => !current)}>Close</Button>
            </Paper>
          )
        }}
      />
    </Stack>
  )
}