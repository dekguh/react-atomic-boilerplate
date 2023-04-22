// MUIS
import FormControlLabelMUI, { FormControlLabelProps } from '@mui/material/FormControlLabel'
import { styled } from '@mui/material/styles'

const FormControlLabel = styled(FormControlLabelMUI)<FormControlLabelProps>(({ theme }) => ({
  '& .MuiTypography-root': {
    fontSize: 14,
    color: theme.palette.text.primary,
  }
}))

export default FormControlLabel