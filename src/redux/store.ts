import {configureStore} from '@reduxjs/toolkit'
import {antsApi} from '@services/ants'
import antsReducer from './antsCalculation'

export const store = configureStore({
  reducer: {
    antCalculation: antsReducer,
    [antsApi.reducerPath]: antsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(antsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
