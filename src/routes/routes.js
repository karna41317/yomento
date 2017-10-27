import { Easing, Animated } from 'react-native'
import { StackNavigator } from 'react-navigation'

import homeScreen from 'src/screens/home/home-screen'
import loginScreen from 'src/screens/auth/login/login-screen_no_animation'
import signupScreen from 'src/screens/auth/signup/signup-screen'
import verfiyScreen from 'src/screens/auth/verify/verify-screen'
import verificationCodeScreen from 'src/screens/auth/verificationCode/verification-code-screen'
import passwordScreen from 'src/screens/auth/password/password-screen'

const headerColor = '#39babd'
const activeColor = 'white'

export const AppNavigator = StackNavigator({
  home: {
    screen: homeScreen,
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
  navigationOptions: {
    gesturesEnabled: false,
  },
})

