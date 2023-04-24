// MUIS
import MenuMUI, { MenuProps } from '@mui/material/Menu'
import { styled } from '@mui/material/styles'

const Menu = styled(MenuMUI)<MenuProps>({
  '& .MuiMenuItem-root': {
    fontSize: 14,
  }
})

export default Menu