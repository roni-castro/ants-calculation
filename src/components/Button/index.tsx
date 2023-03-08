import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import {ButtonProps} from './types'
import {styles} from './styles'

export default function Button({
  children,
  disabled,
  ...restProps
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, disabled && styles.containerDisabled]}
      {...restProps}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}
