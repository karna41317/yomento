import { Easing, Animated } from 'react-native'
import { StackNavigator } from 'react-navigation'

import HomeScreen from 'src/screens/home/home-screen'
import loginScreen from 'src/screens/auth/login/login-screen'
import signupScreen from 'src/screens/auth/signup/signup-screen'
import verfiyScreen from 'src/screens/auth/verify/verify-screen'
import verificationCodeScreen from 'src/screens/auth/verificationCode/verification-code-screen'
import passwordScreen from 'src/screens/auth/password/password-screen'

const headerColor = '#39babd'
const activeColor = 'white'

export const AppNavigator = StackNavigator({
  home: {
    screen: HomeScreen,
  },
  login: {
    screen: loginScreen,
  },
  password: {
    screen: passwordScreen,
  },
  signup: {
    screen: signupScreen,
  },
  verify: {
    screen: verfiyScreen,
  },
  verificationCode: {
    screen: verificationCodeScreen,
  },
}, {
  initialRouteName: 'home',
  headerMode: 'none',
  mode: 'modal',
  navigationOptions: {
    gesturesEnabled: false,
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const {layout, position, scene} = sceneProps
      const {index} = scene

      const height = layout.initHeight
      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
      })

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      })

      return {opacity, transform: [{translateY}]}
    },
  }),
})

