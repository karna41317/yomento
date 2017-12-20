import React from 'react'
import {
  Text,
  View,
  Animated,
  Dimensions,
} from 'react-native'
import { toLower } from 'lodash'
import { PrimaryButton, SecondaryButton } from '../../buttons/Button'

const DoneButton = ({
                      styles, onDoneBtnClick, onNextBtnClick, readMoreClick,
                      isDoneBtnShow, disable,
                      doneBtnLabel, nextBtnLabel,
                      readMoreLable,
                      doneFadeOpacity, skipFadeOpacity, nextOpacity,
                      isHowRoute,
                    }) => {
  let textStyle = {}
  let buttonStyle = {
    marginVertical: 10,
  }
  let btnContainerStyle = {}

  if (toLower(readMoreLable).includes('reminder') ||
    toLower(nextBtnLabel).includes('reminder')) {


    if (isHowRoute) {
      return null
    }

    textStyle = {
      color: '#0079FF',
      fontSize: 14,
    }
    buttonStyle = {
      paddingHorizontal: 0,
      marginTop: 10,
      borderWidth: 0,
    }
    btnContainerStyle = {
      position: 'absolute',
      bottom: 0,
      left: 40,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
  let disabled

  if (disable === 'undefined') {
    disabled = false
  } else {
    disabled = disable
  }
  return (
    <View style={btnContainerStyle}>
      <View style={[styles.btnContainer]}>
        <Animated.View>
          <PrimaryButton
            disable={disabled}
            upper
            onPress={isDoneBtnShow
              ? onDoneBtnClick
              : onNextBtnClick}>
            {nextBtnLabel}
          </PrimaryButton>
        </Animated.View>
        {isDoneBtnShow && readMoreLable ? (
          <SecondaryButton
            onPress={readMoreClick}
            textStyles={textStyle}
            style={buttonStyle}
            upper>
            {readMoreLable}
          </SecondaryButton>) : null}
      </View>
    </View>
  )
}

export default DoneButton
