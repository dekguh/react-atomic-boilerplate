import React from 'react'

// MUIS
import AlertMUI, { AlertProps } from '@mui/material/Alert'
import AlertTitleMUI, { AlertTitleProps } from '@mui/material/AlertTitle'
import { styled } from '@mui/material/styles'

// TYPES
import { IAlertProps } from './types'

const StyledAlertTitle = styled(AlertTitleMUI)<AlertTitleProps>({
  '&.MuiAlertTitle-root': {
    fontSize: 14,
    fontWeight: 600,
  }
})

const StyledAlert = styled(AlertMUI)<AlertProps>({
  fontSize: 12,
})

const Alert : React.FC<IAlertProps> = (props) => {
  const { alertProps, alertTitleProps, children } = props

  return (
    <StyledAlert {...alertProps}>
      {StyledAlertTitle && (<StyledAlertTitle {...alertTitleProps}/>)}
      {children}
    </StyledAlert>
  )
}

export default Alert