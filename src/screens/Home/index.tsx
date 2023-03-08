import React, {useEffect} from 'react'
import {Text, SafeAreaView} from 'react-native'
import {useGetAntsQuery} from '@services/ants'
import {calculateAntsWinLikeliHood} from '@services/calculateAntsWinLikeliHood'

import {styles} from './styles'
import {LoadingFull, ErrorPlaceholder, Button} from '@components'
import {useSelector, useDispatch} from 'react-redux'
import {
  finishAllCalculations,
  finishAntCalculation,
  setAntsData,
  startAllCalculations,
  startAntCalculation
} from '@redux/antsCalculation'
import {RootState} from '@redux/store'
import {AllAntsCalculationStatus} from '@redux/antsCalculation/types'
import {AntList} from './components/AntList'

export default function Home() {
  const {data, isError, isSuccess, isLoading, refetch} = useGetAntsQuery()
  const antsData = data?.ants
  const allCalculationStatus = useSelector(
    (state: RootState) => state.antCalculation.status
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (isSuccess) {
      dispatch(setAntsData(antsData))
    }
  }, [isSuccess])

  const handleOnStart = () => {
    dispatch(startAllCalculations())

    calculateAntsWinLikeliHood({
      numberOfAnts: antsData.length,
      onStartAntCalculation: (index: number) =>
        dispatch(startAntCalculation({index})),
      onFinishAntCalculation: (values) =>
        dispatch(finishAntCalculation(values)),
      onFinishAllCalculations: () => dispatch(finishAllCalculations())
    })
  }

  if (isLoading) return <LoadingFull />

  if (isError) return <ErrorPlaceholder onRetry={refetch} />

  return (
    <SafeAreaView style={styles.container}>
      <Button
        disabled={allCalculationStatus === AllAntsCalculationStatus.InProgress}
        onPress={handleOnStart}
      >
        Start calculation
      </Button>
      <Text
        style={styles.allStatusText}
      >{`Calculation status: ${allCalculationStatus}`}</Text>
      <AntList />
    </SafeAreaView>
  )
}
