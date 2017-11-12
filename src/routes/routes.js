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
import selfRatingIntroScreen from 'src/screens/profile/self-rating-intro-screen'
import selfRatingScreen from 'src/screens/profile/self-rating-screen'
import selfRatingFinishScreen from 'src/screens/profile/self-rating-finish-screen'
import idealRatingIntroScreen from 'src/screens/profile/ideal-rating-intro-screen'
import idealRatingScreen from 'src/screens/profile/ideal-rating-screen'
import idealRatingFinishScreen from 'src/screens/profile/ideal-rating-finish-screen'

import demoScreen from 'src/screens/demo/demo-screen'
import readMoreScreen from  'src/screens/profile/read-more'

const headerColor = '#39babd'
const activeColor = 'white'

export const AppNavigator = StackNavigator({
  home: {
    screen: profileScreen,
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

  onBoarding: {
    screen: onBoarding,
  },
  readMore:{
    screen: readMoreScreen
  },
  selfRatingIntro: {
    screen: selfRatingIntroScreen
  },
  selfRating: {
    screen: selfRatingScreen
  },
  selfRatingFinish: {
    screen: selfRatingFinishScreen
  },
  idealRatingIntro: {
    screen: idealRatingIntroScreen
  },
  idealRating: {
    screen: idealRatingScreen
  },
  idealRatingFinish: {
    screen: idealRatingFinishScreen
  },
  profile: {
    screen: profileScreen,
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

