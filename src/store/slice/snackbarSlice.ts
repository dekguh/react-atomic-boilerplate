import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store'
import { HYDRATE } from 'next-redux-wrapper'

export interface ISnackbarState {
  isOpen: boolean;
  severity: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
}

export const initialState : ISnackbarState = {
  isOpen: false,
  severity: 'error',
  title: '',
  message: ''
}

const hydrate = createAction<AppState>(HYDRATE)

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    callSnackbar: (state, action : PayloadAction<ISnackbarState>) => {
      state.severity = action.payload.severity
      state.message = action.payload.message
      state.title = action.payload.title
      state.isOpen = action.payload.isOpen
    },
    setIsOpenSnackbar: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
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

export const { callSnackbar, setIsOpenSnackbar } = snackbarSlice.actions
export const selectSnackbarState = (state: AppState) => state.snackbar
export default snackbarSlice.reducer