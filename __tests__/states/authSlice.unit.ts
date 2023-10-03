import authReducer, { IAuthState, initialState, userIsAuthAct, userTokenAct, userTokenIsValid } from '@/store/slice/authSlice'

describe('authReducer unit testing', () => {
  test('should return initial state', () => {
    expect(authReducer(undefined, { type: undefined })).toEqual(initialState)
  })

  test('action userIsAuthAct', () => {
    const previousState : IAuthState = initialState
    expect(authReducer(previousState, userIsAuthAct(true))).toEqual({
      ...initialState,
      isAuth: true
    })
  })

  test('action userTokenAct', () => {
    const previousState : IAuthState = initialState
    expect(authReducer(previousState, userTokenAct('token'))).toEqual({
      ...initialState,
      token: 'token'
    })
  })

  test('action userTokenIsValid', () => {
    const previousState : IAuthState = initialState
    expect(authReducer(previousState, userTokenIsValid(true))).toEqual({
      ...initialState,
      isTokenValid: true
    })
  })
})