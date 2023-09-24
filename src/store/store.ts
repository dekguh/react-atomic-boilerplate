import { configureStore  } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { authSlice } from './slice/authSlice'
import { userSlice}  from './slice/userSlice'
import { apiSlice } from './slice/apiSlice'
import { snackbarSlice } from './slice/snackbarSlice'

const makeStore = () => configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [snackbarSlice.name]: snackbarSlice.reducer
  },
  devTools: process.env.NODE_ENV === 'development' ? true : false,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>

export const wrapper = createWrapper<AppStore>(makeStore)