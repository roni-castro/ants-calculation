import React from 'react'
import {ActivityIndicator, View} from 'react-native'
import {Colors} from '@theme/tokens'
import {styles} from './styles'

export default function LoadingFull() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={Colors.primary} />
    </View>
  )
}
