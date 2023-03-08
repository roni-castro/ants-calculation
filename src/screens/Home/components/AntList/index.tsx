import {AntsCalculationData} from '@redux/antsCalculation/types'
import {RootState} from '@redux/store'
import React from 'react'
import {FlatList, View} from 'react-native'
import {useSelector} from 'react-redux'
import AntItem from '../AntItem'

import {styles} from './styles'

export function AntList() {
  const antsData = useSelector<RootState>(
    (state) => state.antCalculation.ants
  ) as AntsCalculationData[]

  const renderItem = ({item}) => <AntItem {...item} />

  return (
    <FlatList
      contentContainerStyle={styles.contentContainerStyle}
      // bounces={false}
      data={antsData}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      ItemSeparatorComponent={() => <View style={{padding: 8}} />}
    />
  )
}
