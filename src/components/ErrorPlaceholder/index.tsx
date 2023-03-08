import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {styles} from './styles'
import {ErrorPlaceholderTypes} from './types'

export default function ErrorPlaceholder({
  message = 'Error fetching data. Please try again!',
  onRetry
}: ErrorPlaceholderTypes) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity onPress={onRetry}>
        <Text style={styles.retryText}>Retry</Text>
      </TouchableOpacity>
    </View>
  )
}
