import React from 'react'
import {FlatList, View} from 'react-native'
import AntItem from '../AntItem'

import {styles} from './styles'
import {AntListProps} from './types'

export function AntList({data}: AntListProps) {
  const renderItem = ({item}) => <AntItem {...item} />

  return (
    <FlatList
      contentContainerStyle={styles.contentContainerStyle}
      bounces={false}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      ItemSeparatorComponent={() => <View style={{padding: 8}} />}
    />
  )
}
