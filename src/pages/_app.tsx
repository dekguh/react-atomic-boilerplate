import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// MUIS
import { ThemeProvider } from '@mui/material/styles'

// THEME
import theme from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
