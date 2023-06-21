import userReducer, { IUserState, setDataState } from '@/store/slice/userSlice'

describe('userReducer unit testing', () => {
  test('should return initial state', () => {
    expect(userReducer(undefined, { type: undefined })).toEqual({
      data: {}
    })
  })

  test('action setDataState', () => {
    const previousState : IUserState = { data: {} }
    expect(userReducer(previousState, setDataState({ isLogin: true }))).toEqual({
      data: {
        isLogin: true
      }
    })
  })
})