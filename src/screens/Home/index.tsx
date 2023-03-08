import React from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import {useGetAntsQuery} from '@services/ants'

import {styles} from './styles'
import {LoadingFull, ErrorPlaceholder, Button} from '@components'
import {AntList} from './components/AntList'

export default function Home() {
  const {data, isError, isLoading, refetch} = useGetAntsQuery()
  const antsData = data?.ants

  if (isLoading) return <LoadingFull />

  if (isError) return <ErrorPlaceholder onRetry={refetch} />

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Button>Start calculation</Button>
        <AntList data={antsData} />
      </View>
    </SafeAreaView>
  )
}
