import React from 'react'
import type { AppProps } from 'next/app'
import MainWrapper from '@/wrapper/MainWrapper'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainWrapper>
      <Component {...pageProps} />
    </MainWrapper>
    
  )
}
