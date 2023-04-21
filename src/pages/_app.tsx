import React from 'react'
import type { AppProps } from 'next/app'

// FONT
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// MUIS
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'

// THEME
import theme from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
