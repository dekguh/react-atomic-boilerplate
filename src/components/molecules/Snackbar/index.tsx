import React from 'react'

// COMPONENTS
import Alert from '@/components/atoms/elements/Alert'
import Typography from '@/components/atoms/text/Typography'

// MUIS
import Box from '@mui/material/Box'
import { default as SnackbarMUI } from '@mui/material/Snackbar'
import Slide, { SlideProps } from '@mui/material/Slide'

// TYPES
import { iSnackbarProps } from './types'

const SlideTransition : React.FC<SlideProps> = (props) => (
  <Slide
    {...props} 
    direction='left' 
  />
)

const Snackbar : React.FC<iSnackbarProps> = (props) => {
  const { open, autoHideDuration, onClose, severity, title, message } = props

  return (
    <SnackbarMUI
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      TransitionComponent={SlideTransition}
    >
      <Box maxWidth='400px' data-testid='snackbarNotifId'>
        <Alert
          alertProps={{
            severity: severity,
          }}
          alertTitleProps={{
            children: title
          }}
        >
          <Typography>{message}</Typography>
        </Alert>
      </Box>
    </SnackbarMUI>
  )
}

export default Snackbar