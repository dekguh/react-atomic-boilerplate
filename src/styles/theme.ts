// CONSTANTS
import colors from '@/constants/colors'

// TYPES
import './theme.d'

// MUIS
import { createTheme } from '@mui/material/styles'


const theme = createTheme({
  palette: colors,
  text: {
    heading: '#3C3C3C',
    body: '#6B6B6B'
  }
})

export default theme