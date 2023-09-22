import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store'
import { HYDRATE } from 'next-redux-wrapper'
import { getCookieJwt, setCookieJwt } from '@/utils/cookies'

export interface IAuthState {
  isAuth: boolean;
  token?: string | null;
}

export const initialState: IAuthState = {
  isAuth: getCookieJwt() ? true : false,
  token: getCookieJwt() ?? ''
}

const hydrate = createAction<AppState>(HYDRATE)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userIsAuthAct: (state, action : PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
    userTokenAct: (state, action : PayloadAction<string | number | boolean>) => {
      setCookieJwt(action.payload as string)
      state.token = action.payload as string | null
    },
    userLogoutAct: (state) => {
      setCookieJwt('')
      state.token = ''
      state.isAuth = false
    }
  },
  extraReducers: builder => {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload.auth
      }
    })
  },
})

export const { userIsAuthAct, userLogoutAct, userTokenAct } = authSlice.actions
export const selectAuthState = (state: AppState) => state.auth
export default authSlice.reducer