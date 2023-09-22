/**
 * @see https://redux-toolkit.js.org/rtk-query/usage/code-splitting
 */
import { apiSlice } from '@/store/slice/apiSlice'

const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (payload) => ({
        url: '/auth/login',
        method: 'POST',
        body: payload
      })
    }),
  })
})

export const { useUserLoginMutation } = authApi