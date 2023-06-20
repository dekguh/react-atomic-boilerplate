import { createAction, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store'
import { HYDRATE } from 'next-redux-wrapper'

export interface IUserState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: {[key: string]: number | string | Array<any> | undefined};
}

const initialState: IUserState = {
  data: {}
}

const hydrate = createAction<AppState>(HYDRATE)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setDataState: (state, action) => {
      state.data = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload.user
      }
    })
  }
})

export const { setDataState } = userSlice.actions
export const selectUserState = (state: AppState) => state.user
export default userSlice.reducer