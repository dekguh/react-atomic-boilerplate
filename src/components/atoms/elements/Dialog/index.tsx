import React from 'react'

// MUIS
import DialogMUI, { DialogProps } from '@mui/material/Dialog'
import DialogActionsMUI, { DialogActionsProps } from '@mui/material/DialogActions'
import DialogContentMUI, { DialogContentProps } from '@mui/material/DialogContent'
import { styled } from '@mui/material/styles'

// TYPES
import { IDialogProps } from './types'

const StyledDialog = styled(DialogMUI)<DialogProps>({
  fontSize: 14,
})

const StyledDialogContent = styled(DialogContentMUI)<DialogContentProps>({
  padding: 0,
})

const StyledDialogActions = styled(DialogActionsMUI)<DialogActionsProps>({
  padding: 0,
})

const Dialog : React.FC<IDialogProps> = (props) => {
  const { dialogProps, header, content, footer } = props

  return (
    <StyledDialog {...dialogProps}>
      {header}
      {content && <StyledDialogContent>{content}</StyledDialogContent>}
      {footer && <StyledDialogActions>{footer}</StyledDialogActions>}
    </StyledDialog>
  )
}

export default Dialog