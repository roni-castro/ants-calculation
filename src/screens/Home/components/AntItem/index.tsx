import {AntCalculationStatus} from '@redux/antsCalculation/types'
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

const formatWinLikelihood = (
  winLikelihood: number,
  status: AntCalculationStatus
) => {
  if (winLikelihood === undefined || status === AntCalculationStatus.InProgress)
    return '-'
  const roundedWinLikelihood = (winLikelihood * 100).toFixed(2)
  return `${roundedWinLikelihood}%`
}

export default function AntItem({
  name,
  length,
  color,
  weight,
  status,
  winLikelihood
}: AntItemProps) {
  const stylesDynamic = StyleSheet.create({
    text: {
      textAlign: 'center',
      fontSize: 14,
      color: ColorsMap[color] || ColorsMap.BLACK
    }
  })

  return (
    <View style={styles.container}>
      <Text style={[stylesDynamic.text, styles.title]}>{name}</Text>
      <View style={styles.infoContainer}>
        <Text style={stylesDynamic.text}>{`Weight: ${weight}`}</Text>
        <Text style={stylesDynamic.text}>{`Length: ${length}`}</Text>
        <Text style={stylesDynamic.text}>{`Color: ${color}`}</Text>
      </View>
      <Text style={stylesDynamic.text}>{`Status: ${status}`}</Text>

      <Text style={stylesDynamic.text}>{`Win likelihood: ${formatWinLikelihood(
        winLikelihood,
        status
      )}`}</Text>
    </View>
  )
}
