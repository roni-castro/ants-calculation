import {Colors} from '@theme/tokens'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    padding: 8,
    borderRadius: 4
  },
  containerDisabled: {
    backgroundColor: Colors.silver
  },
  text: {
    color: Colors.white,
    textAlign: 'center'
  }
})
