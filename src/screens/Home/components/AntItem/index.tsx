import {Colors} from '@theme/tokens'
import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {styles} from './styles'
import {AntItemProps} from './types'

const ColorsMap = {
  BLACK: Colors.black,
  RED: Colors.red,
  SILVER: Colors.silver
}

const SizeIncrease = 2

export default function AntItem({name, length, color, weight}: AntItemProps) {
  const stylesDynamic = StyleSheet.create({
    text: {
      fontSize: 14,
      color: ColorsMap[color] || ColorsMap.BLACK
    },

    circle: {
      width: length * SizeIncrease,
      height: weight * SizeIncrease,
      borderRadius: length
    }
  })

  return (
    <View style={styles.container}>
      <View style={stylesDynamic.circle}></View>
      <Text style={[stylesDynamic.text, styles.title]}>{name}</Text>
      <View style={styles.infoContainer}>
        <Text style={stylesDynamic.text}>{`Weight: ${weight}`}</Text>
        <Text style={stylesDynamic.text}>{`Length: ${weight}`}</Text>
        <Text style={stylesDynamic.text}>{`Color: ${color}`}</Text>
      </View>
    </View>
  )
}
