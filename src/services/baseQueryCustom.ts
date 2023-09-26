/**
 * @see https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#automatic-re-authorization-by-extending-fetchbasequery
 * @see https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery#setting-default-headers-on-requests
 * example api using https://dummyjson.com/docs/auth
 */

// LIB
import { Mutex } from 'async-mutex'

// REDUX
import { userIsAuthAct, userTokenAct } from '@/store/slice/authSlice'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'

// UTILS
import { getCookieJwt } from '@/utils/cookies'
import Router from 'next/router'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  prepareHeaders: (headers) => {
    if (getCookieJwt()) headers.set('authorization', `Bearer ${getCookieJwt()}`)
    return headers
  }
})
// using async mutex for avoid the multiple call api refresh token
const mutex = new Mutex()

export const baseQueryWithRefreshToken : BaseQueryFn<
  string | FetchArgs, unknown, FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let responseResult = await baseQuery(args, api, extraOptions)
  if (responseResult.error && responseResult.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        // process refresh token here
        const responseRefreshToken = false
        if (responseRefreshToken) {
          // update token
          api.dispatch(userTokenAct('token'))
        } else {
          // logout
          api.dispatch(userIsAuthAct(false))
          api.dispatch(userTokenAct(''))
          Router.push('/sign-in')
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      responseResult = await baseQuery(args, api, extraOptions)
    }
  }

  return responseResult
}