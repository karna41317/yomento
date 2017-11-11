import { Platform } from 'react-native'

export const thinTextMixin = (fontSize = null, color='#FFF') => {
  return {
    fontFamily: 'TabletGothic-Thin',
    fontSize,
    color
  }
}

export const lightTextMixin = (fontSize = null, color='#FFF') => {
  return {
    fontFamily: 'TabletGothic-Light',
    fontSize,
    color
  }
}

export const regularTextMixin = (fontSize = null, color='#FFF') => {
  return {
    fontFamily: 'TabletGothic-Light',
    fontWeight: "300",
    fontSize,
    color

  }
}

export const mediumTextMixin = (fontSize = null, color='#FFF') => {
  return {
    fontFamily: 'TabletGothic-Regular',
    fontSize,
    color

  }
}

export const semiBoldTextMixin = (fontSize = null, color='#FFF') => ({
  fontFamily: 'TabletGothic-Bold',
  fontSize,
  color
})


export const boldTextMixin = (fontSize = null, color='#FFF') => ({
  fontFamily: 'TabletGothic-Bold',
  fontSize,
  color
})


export const extraBoldTextMixin = (fontSize = null, color='#FFF') => ({
  fontFamily: 'TabletGothic-ExtraBold',
  fontSize,
  color
})

