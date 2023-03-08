import React from 'react'
import {View, SafeAreaView} from 'react-native'
import {useGetAntsQuery} from '@services/ants'
import {calculateAntsWinLikeliHood} from '@services/calculateAntsWinLikeliHood'

import {styles} from './styles'
import {LoadingFull, ErrorPlaceholder, Button} from '@components'
import {AntList} from './components/AntList'

export default function Home() {
  const {data, isError, isLoading, refetch} = useGetAntsQuery()
  const antsData = data?.ants

  if (isLoading) return <LoadingFull />

  if (isError) return <ErrorPlaceholder onRetry={refetch} />

  const handleOnStart = () => {
    calculateAntsWinLikeliHood({
      numberOfAnts: antsData.length,
      onAntCalculation: (values) => console.log(values),
      onEndAllCalculations: () => console.log('Finished')
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Button onPress={handleOnStart}>Start calculation</Button>
        <AntList data={antsData} />
      </View>
    </SafeAreaView>
  )
}
