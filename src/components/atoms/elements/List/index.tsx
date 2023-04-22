// MUIS
import ListMUI, { ListProps } from '@mui/material/List'
import { styled } from '@mui/material/styles'

const List = styled(ListMUI)<ListProps>({
  '& .MuiTypography-root': {
    fontSize: 14,
  }
})

export default List