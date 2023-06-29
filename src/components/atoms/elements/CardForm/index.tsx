// MUIS
import Stack, { StackProps } from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

const CardForm = styled(Stack)<StackProps>(({ theme }) => ({
  '&.MuiStack-root': {
    boxShadow: theme.shadows[1]
  },
}))

export default CardForm