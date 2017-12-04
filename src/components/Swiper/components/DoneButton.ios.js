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
                    }) => {
  let textStyle = {}
  let buttonStyle = {
    marginVertical: 10,
  }
  let btnContainerStyle = {}
  if (toLower(readMoreLable) === 'set reminder') {
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
      bottom: 50,
      marginLeft: 10,
      alignSelf: 'center',
    }
  }
  let disabled

  if (disable === 'undefined') {
    disabled = false
  } else {
    console.log('printing disable', disable)

    disabled = disable
  }
  return (
    <View style={[styles.btnContainer, btnContainerStyle]}>
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
  )
}

export default DoneButton
