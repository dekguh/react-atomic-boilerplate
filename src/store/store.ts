import { configureStore  } from '@reduxjs/toolkit'
import { userSlice}  from './slice/userSlice'
import { createWrapper } from 'next-redux-wrapper'

const makeStore = () => configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer
  },
  devTools: true,
})

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>

export const wrapper = createWrapper<AppStore>(makeStore)