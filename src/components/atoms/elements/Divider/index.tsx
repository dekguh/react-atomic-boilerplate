// MUIS
import DividerMUI, { DividerProps } from '@mui/material/Divider'
import { styled } from '@mui/material/styles'

const Divider = styled(DividerMUI)<DividerProps>(({ theme }) => ({
  '&.MuiDivider-root': {
    borderColor: theme.palette.other.outlineBorder,
  }
}))

export default Divider