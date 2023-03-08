import {Colors} from '@theme/tokens'
import React from 'react'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  message: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 16
  },
  retryText: {
    color: Colors.blueLight
  }
})
