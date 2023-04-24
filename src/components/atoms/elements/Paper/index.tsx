// MUIS
import PaperMUI, { PaperProps } from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const Paper = styled(PaperMUI)<PaperProps>({
  borderRadius: 0,
  fontSize: 14,
})

export default Paper