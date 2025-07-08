import { useAuthStore } from '@/shared/store/auth.store'
import Colors from '@/shared/themes/Colors'
import { createAvatarFromString } from '@/shared/utils/utils'
import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useEffect, useRef, useState } from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { HeaderProps } from '../types/homeTypes'

const Header = ({onPress}:HeaderProps) => {
  const [svg, setSvg] = useState<string | null>(null)
  const { username } = useAuthStore()

  const widthAnim = useRef(new Animated.Value(0)).current
  const [showName, setShowName] = useState(false)

  useEffect(() => {
    if (!username) return
    const result = createAvatarFromString(username)
    setSvg(result.toString())
  }, [username])

  const toggleName = () => {
    if (showName) {
      Animated.timing(widthAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setShowName(false))
    } else {
      setShowName(true)
      Animated.timing(widthAnim, {
        toValue: 150,
        duration: 300,
        useNativeDriver: false,
      }).start()
    }
  }

  return (
    <View style={styles.container}>
      {svg && (
        <TouchableOpacity onPress={toggleName} style={styles.avatarContainer}>
          <SvgXml xml={svg} style={styles.avatar} />
        </TouchableOpacity>
      )}
      {showName && (
        <Animated.View style={[styles.textContainer, { width: widthAnim }]}>
          <Text style={styles.text} numberOfLines={2}>
            {username}
          </Text>
          <Ionicons onPress={onPress} size={25} color={Colors.white} name='exit' />
        </Animated.View>
      )}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    elevation: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'transparent',
    zIndex: 4,
    alignSelf: 'flex-start',
    overflow: 'hidden',
    margin: 12,
  },
  textContainer: {
    paddingStart: 8,
    paddingEnd: 12,
    justifyContent: 'center',
    overflow: 'hidden',
    flexDirection:'row',
    alignItems:'center',
    gap:10
  },
  text: {
    fontSize: 14,
    fontFamily: 'Rubik-SemiBold',
    color: Colors.white,
    flex:1
  },
  avatar: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  avatarContainer: {
    overflow: 'hidden',
    width: 50,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 100,
    alignSelf: 'center',
    backgroundColor: Colors.white,
  },
})
