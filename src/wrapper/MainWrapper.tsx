import React from 'react'

// FONT
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// MUIS
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'

// STATES & REDUX
import { wrapper } from '@/store/store'

// THEME
import theme from '../styles/theme'

const MainWrapper = ({ children } : {children: JSX.Element | React.ReactNode;}) : JSX.Element | null => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default wrapper.withRedux(MainWrapper)