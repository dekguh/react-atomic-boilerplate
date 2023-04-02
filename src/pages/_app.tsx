import React from 'react'
import type { AppProps } from 'next/app'

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
