/**
 * Created by Karan on 2017-10-28.
 */

import { Platform } from 'react-native'

export const lightTextMixin = (fontSize = null) => {
  if (Platform.OS === 'android') {
    return {
      fontFamily: 'Raleway',
      fontSize,
    }
  }
  return {
    fontWeight: '300',
    fontSize,
  }
}

export const regularTextMixin = (fontSize = null) => {
  if (Platform.OS === 'android') {
    return {
      fontFamily: 'Raleway',
      fontSize,
    }
  }
  return {
    fontWeight: '400',
    fontSize,
  }
}

export const mediumTextMixin = (fontSize = null) => {
  if (Platform.OS === 'android') {
    return {
      fontFamily: 'Raleway',
      fontSize,
    }
  }
  return {
    fontWeight: '500',
    fontSize,
  }
}

export const boldTextMixin = (fontSize = null) => ({
  fontFamily: Platform.OS === 'android' ? 'Raleway' : null,
  fontWeight: '700',
  fontSize,
})
