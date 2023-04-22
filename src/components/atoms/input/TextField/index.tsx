// MUIS
import TextFieldMUI, { TextFieldProps } from '@mui/material/TextField'
import { styled } from '@mui/material/styles'

const TextField = styled(TextFieldMUI)<TextFieldProps>({
  '& .MuiFormLabel-root': {
    fontSize: 14,
  },
  '&.MuiTextField-root': {
    fontSize: 14,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    fontSize: 14,
  }
})

export default TextField