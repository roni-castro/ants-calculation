import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import {ButtonProps} from './types'
import {styles} from './styles'

export default function Button({children, ...restProps}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      {...restProps}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}
