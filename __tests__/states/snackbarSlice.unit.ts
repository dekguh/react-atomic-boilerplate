import snackbarReducer, { ISnackbarState, callSnackbar, initialState, setIsOpenSnackbar } from '@/store/slice/snackbarSlice'

describe('sliceReducer unit testing', () => {
  test('should return initial state', () => {
    const previousState : ISnackbarState = initialState
    expect(snackbarReducer(previousState, { type: undefined })).toEqual(initialState)
  })

  test('action callSnackbar', () => {
    const previousState : ISnackbarState = initialState
    expect(snackbarReducer(previousState, callSnackbar({
      severity: 'error',
      title: 'oops!',
      message: 'failed login, please check your email or password',
      isOpen: true,
    }))).toEqual({
      severity: 'error',
      title: 'oops!',
      message: 'failed login, please check your email or password',
      isOpen: true,
    })
  })

  test('action setIsOpenSnackbar', () => {
    const previousState : ISnackbarState = initialState
    expect(snackbarReducer(previousState, setIsOpenSnackbar(true))).toEqual({
      ...previousState,
      isOpen: true,
    })
  })
})