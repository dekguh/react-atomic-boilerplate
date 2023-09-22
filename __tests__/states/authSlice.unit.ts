import authReducer, { IAuthState, initialState, userIsAuthAct, userTokenAct } from '@/store/slice/authSlice'

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
})