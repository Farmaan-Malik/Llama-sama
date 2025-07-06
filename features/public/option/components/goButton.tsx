import Colors from '@/shared/themes/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { goButtonProps } from '../types/optionTypes'

const GoButton = ({onPress}:goButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.9}>
      <FontAwesome size={50} style={styles.icon} name="arrow-right" />
    </TouchableOpacity>
  )
}

export default GoButton

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  icon: {
    color: Colors.white,
  },
})
