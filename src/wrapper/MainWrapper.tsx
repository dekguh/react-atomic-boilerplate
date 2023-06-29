import React from 'react'

// FONT
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// MUIS
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
// if using MUI PRO
// import { LicenseInfo } from '@mui/x-license-pro'

// STATES & REDUX
import { wrapper } from '@/store/store'

// THEME
import theme from '@/styles/theme'

// if using MUI PRO
// LicenseInfo.setLicenseKey(process.env.MUI_PRO_X_LICENSE)

const MainWrapper = ({ children } : {children: JSX.Element | React.ReactNode;}) : JSX.Element | null => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default wrapper.withRedux(MainWrapper)