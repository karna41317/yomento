import React from 'react'
import {
  Text,
  View,
  Animated,
} from 'react-native'
import { PrimaryButton, SecondaryButton } from '../../buttons/Button'

const DoneButton = ({
                      styles, onDoneBtnClick, onNextBtnClick, readMoreClick,
                      isDoneBtnShow,
                      doneBtnLabel, nextBtnLabel,
                      readMoreLable,
                      doneFadeOpacity, skipFadeOpacity, nextOpacity,
                    }) => {
  console.log('printing', nextBtnLabel, doneBtnLabel)

  return (
    <View style={styles.btnContainer}>
      <Animated.View>
        <PrimaryButton
          onPress={isDoneBtnShow
            ? onDoneBtnClick
            : onNextBtnClick}>
          {nextBtnLabel}
        </PrimaryButton>
      </Animated.View>
      {isDoneBtnShow && readMoreLable ? (
        <SecondaryButton onPress={readMoreClick} style={{marginTop: 10}}>Read
          more</SecondaryButton>) : null}
    </View>
  )
}

export default DoneButton
