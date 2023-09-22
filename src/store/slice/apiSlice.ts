import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithRefreshToken } from '@/services/baseQueryCustom'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({})
})