import React from 'react'

// MUIS
import Backdrop from '@mui/material/Backdrop'
import Slide from '@mui/material/Slide'

// TYPES
import { IDialogSideProps } from './types'

const DialogSide : React.FC<IDialogSideProps> = (props) => {
  const { backdropProps, slideProps } = props
  return (
    <Backdrop {...backdropProps}>
      <Slide {...slideProps} />
    </Backdrop>
  )
}

export default DialogSide