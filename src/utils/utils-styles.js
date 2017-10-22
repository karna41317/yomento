/**
 * Created by Karan on 2017-10-22.
 */
import { Platform } from 'react-native'

/**
 * Combine style from props like: marginTop, left, right
 * @param propStyleKeys
 * @param props
 * @returns {{}}
 */
export function getStyleFromProps (propStyleKeys = [], props = {}) {
  let style = {}
  propStyleKeys.map((propStyleKey) => {
    const propStyleValue = props[propStyleKey]
    if (propStyleValue !== undefined && propStyleValue !== null &&
      propStyleValue !== false) {
      style = {
        ...style,
        [propStyleKey]: propStyleValue,
      }
    }
    return propStyleKey
  })
  if (props.style) {
    style = {
      ...style,
      ...props.style
    }
  }
  return style
}

export function getPlatformValue (os, value, valueDefault) {
  if (Platform.OS === os) return value
  return valueDefault
}

//export const getColorCodes = () => (['#0B0B48', '#0F0E4E', '#0F0F55', '#111059', '#17166D', '#181776', '#1D1C80', '#1E1D85'])