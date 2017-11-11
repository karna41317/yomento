import React from 'react'
import {
  Text,
  View,
  Animated,
} from 'react-native'
import { PrimaryButton } from '../../buttons/Button'

const DoneButton = ({
                      styles, onDoneBtnClick, onNextBtnClick,
                      isDoneBtnShow,
                      doneBtnLabel, nextBtnLabel,
                      doneFadeOpacity, skipFadeOpacity, nextOpacity,
                    }) => {
  console.log('printing', nextBtnLabel, doneBtnLabel)

  return (
    <View style={styles.btnContainer}>
      <Animated.View
        style={{
          opacity: doneFadeOpacity,
          transform: [
            {
              translateX: skipFadeOpacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 20],
              }),
            }],
        }}>
        <PrimaryButton>{doneBtnLabel}</PrimaryButton>
      </Animated.View>
      <Animated.View style={[{opacity: nextOpacity}]}>
        <PrimaryButton
          onPress={isDoneBtnShow
            ? onDoneBtnClick
            : onNextBtnClick}>
          {nextBtnLabel}
        </PrimaryButton>
      </Animated.View>
    </View>
  )
}

export default DoneButton
