// MUIS
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

const ButtonIcon = styled(IconButton)<IconButtonProps>({
  '& .MuiSvgIcon-root': {
    width: 20,
    height: 20,
  }
})

export default ButtonIcon