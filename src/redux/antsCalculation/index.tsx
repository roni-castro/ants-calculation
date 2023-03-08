import {createSlice} from '@reduxjs/toolkit'
import {
  AllAntsCalculationStatus,
  AntCalculationStatus,
  AntsCalculationData
} from './types'

const initialState = {
  status: AllAntsCalculationStatus.NotYetRun,
  ants: [] as AntsCalculationData[]
}

export const antsSlice = createSlice({
  name: 'antCalculation',
  initialState,
  reducers: {
    setAntsData: (state, action) => {
      state.ants = action.payload.map((ant) => ({
        status: AntCalculationStatus.NotYetRun,
        ...ant
      }))
    },
    startAllCalculations: (state) => {
      state.status = AllAntsCalculationStatus.InProgress
    },
    finishAllCalculations: (state) => {
      state.status = AllAntsCalculationStatus.AllCalculated
    },
    startAntCalculation: (state, action) => {
      const {index} = action.payload
      state.ants[index].status = AntCalculationStatus.InProgress
    },
    finishAntCalculation: (state, action) => {
      const {index, winLikelihood} = action.payload
      state.ants[index].status = AntCalculationStatus.Calculated
      state.ants[index].winLikelihood = winLikelihood
    }
  }
})

export const {
  setAntsData,
  startAllCalculations,
  finishAllCalculations,
  startAntCalculation,
  finishAntCalculation
} = antsSlice.actions

export default antsSlice.reducer
