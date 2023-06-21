import React, { PropsWithChildren } from 'react'

// REDUX
import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { AppStore, AppState } from '@/store/store'
import userReducer from '@/store/slice/userSlice'

// RTL
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    preloadedState?: PreloadedState<AppState> | {[key: string]: any}
    store?: AppStore
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: { user: userReducer }, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function Wrapper({ children }: PropsWithChildren<{[key: string]: any}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }
  
  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}