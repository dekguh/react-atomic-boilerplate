import React from 'react'

// MUIS
import FormControlMUI, { FormControlProps } from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import { styled } from '@mui/material/styles'

// TYPES
import { IFormControlProps } from './types'

const StyledFormControl = styled(FormControlMUI)<FormControlProps>({
  '& .MuiFormLabel-root': {
    fontSize: 14,
  },
  '& .MuiInputBase-root': {
    fontSize: 14,
  }
})

const FormControl : React.FC<IFormControlProps> = (props) => {
  return (
    <StyledFormControl {...props.controlProps}>
      {Boolean(props.labelProps) && (<InputLabel {...props.labelProps}/>)}
      {props.children}
      {Boolean(props.helperProps) && (<FormHelperText {...props.helperProps}/>)}
    </StyledFormControl>
  )
}

export default FormControl