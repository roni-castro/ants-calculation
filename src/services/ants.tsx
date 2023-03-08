import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {AntsResponse} from '@apiTypes/ants'

export const antsApi = createApi({
  reducerPath: 'ants',
  baseQuery: fetchBaseQuery({baseUrl: 'https://sg-ants-test.herokuapp.com'}),
  endpoints: (builder) => ({
    getAnts: builder.query<AntsResponse, void>({
      query: () => `ants`
    })
  })
})

export const {useGetAntsQuery} = antsApi
