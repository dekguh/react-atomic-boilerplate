// MUIS
import ButtonMUI, { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const Button = styled(ButtonMUI)<ButtonProps>({
  textTransform: 'none',
  fontSize: 14,
})

export default Button