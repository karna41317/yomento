import { Easing, Animated } from 'react-native'
import { StackNavigator } from 'react-navigation'

import homeScreen from 'src/screens/home/home-screen'
import loginScreen from 'src/screens/auth/login/login-screen_no_animation'
import signupScreen from 'src/screens/auth/signup/signup-screen'
import verfiyScreen from 'src/screens/auth/verify/verify-screen'
import verificationCodeScreen from 'src/screens/auth/verificationCode/verification-code-screen'
import passwordScreen from 'src/screens/auth/password/password-screen'
import profileScreen from 'src/screens/profile/profile-screen'
import onBoarding from 'src/screens/on-boarding/on-boarding-screen'
import idealRatingScreen from 'src/screens/profile/ideal-rating-screen'
import selfRatingScreen from 'src/screens/profile/self-rating-screen'
import demoScreen from 'src/screens/demo/demo-screen'
import readMoreScreen from  'src/screens/profile/read-more'

const headerColor = '#39babd'
const activeColor = 'white'

export const AppNavigator = StackNavigator({
  home: {
    screen: idealRatingScreen,
  },
  login: {
    screen: loginScreen,
  },
  onBoarding: {
    screen: onBoarding,
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
  profile: {
    screen: profileScreen,
  },
  idealRating: {
    screen: idealRatingScreen
  },
  selfRating: {
    screen: selfRatingScreen
  },
  readMore:{
    screen: readMoreScreen
  },
  demoScreen: {
    screen: demoScreen
  }
}, {
  initialRouteName: 'home',
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  },
})

