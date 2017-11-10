import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native'



const DoneButton = ({
                      styles, onDoneBtnClick, onNextBtnClick,
                      rightTextColor, isDoneBtnShow,
                      doneBtnLabel, nextBtnLabel,
                      doneFadeOpacity, skipFadeOpacity, nextOpacity,
                    }) => {
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
        <View style={styles.full}>
          <Text>{doneBtnLabel}</Text>
        </View>
      </Animated.View>
      <Animated.View style={[{opacity: nextOpacity}]}>
        <TouchableOpacity style={styles.full}
                          onPress={isDoneBtnShow
                            ? onDoneBtnClick
                            : onNextBtnClick}>
          <Text style={[styles.nextButtonText, {color: rightTextColor}]}>
            {nextBtnLabel}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

export default DoneButton
