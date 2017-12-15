import { StackNavigator } from 'react-navigation'
import loginScreen from 'src/screens/auth/login/login-screen_no_animation'
import homeScreen from 'src/screens/home/home-screen'
import signupScreen from 'src/screens/auth/signup/signup-screen'
import forgotScreen from 'src/screens/auth/forgot/forgot-screen'
import verfiyScreen from 'src/screens/auth/verify/verify-screen'
import verificationCodeScreen from 'src/screens/auth/verificationCode/verification-code-screen'
import passwordScreen from 'src/screens/auth/password/password-screen'
import profileScreen from 'src/screens/profile/profile-screen'
import profileDetailsScreen from 'src/screens/profile/profile-details-screen'
import onBoarding from 'src/screens/on-boarding/on-boarding-screen'

import idealRatingIntroScreen from 'src/screens/profile/ideal-rating-intro-screen'
import idealRatingMainScreen from 'src/screens/profile/ideal-rating-main-screen'
import idealRatingLoopScreen from 'src/screens/profile/ideal-rating-loop-screen'
import idealRatingFinishScreen from 'src/screens/profile/ideal-rating-finish-screen'


import selfRatingIntroScreen from 'src/screens/profile/self-rating-intro-screen'
import selfRatingMainScreen from 'src/screens/profile/self-rating-main-screen'
import selfRatingLoopScreen from 'src/screens/profile/self-rating-loop-screen'
import selfRatingFinishScreen from 'src/screens/profile/self-rating-finish-screen'

import demoScreen from 'src/screens/demo/demo-screen'
import readMoreScreen from 'src/screens/profile/read-more'
import dashboardScreen from 'src/screens/dashboard/dashboard-screen'
import finishedScreen from 'src/screens/dashboard/finished-screen'

import initDashboardScreen from 'src/screens/dashboard/init-dashboard-screen'
import LoopScreen from 'src/screens/loop/loop-screen'
import loopIntroScreen from 'src/screens/loop/loop-intro-screen'
import loopHowScreen from 'src/screens/loop/loop-how-screen'
import loopReminderScreen from 'src/screens/loop/loop-reminder-screen'
import loopReminderConfirmScreen from 'src/screens/loop/loop-reminder-confirm-screen'
import loopCoachReminderEndScreen from 'src/screens/loop/loop-coach-reminder-end-screen'
import loopCoachReminderEndNextScreen from 'src/screens/loop/loop-coach-reminder-end-next-screen'
import loopCoachReflectionIntroScreen from 'src/screens/loop/loop-coach-reflection-intro-screen'
import loopReflectionScreen from 'src/screens/loop/loop-coach-reflection-screen'
import loopCoachReflectionAfterScreen from 'src/screens/loop/loop-coach-reflection-end-screen'

/*
let MyTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 1]
  const opacity = position.interpolate({
    inputRange,
    outputRange: [.1, 1, 1],
  })

  const scaleY = position.interpolate({
    inputRange,
    outputRange: ([0.1, 1, 1]),
  })

  return {
    opacity,
    transform: [
      {scaleY},
    ],
  }
}

let TransitionConfiguration = () => {
  return {
    // Define scene interpolation, eq. custom transition
    screenInterpolator: (sceneProps) => {

      const {position, scene} = sceneProps
      const {index} = scene

      return MyTransition(index, position)
    },
  }
}
*/

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
  forgot: {
    screen: forgotScreen,
  },
  verificationCode: {
    screen: verificationCodeScreen,
  },
  onBoarding: {
    screen: onBoarding,
  },
  readMore: {
    screen: readMoreScreen,
  },
  selfRatingIntro: {
    screen: selfRatingIntroScreen,
  },
  selfRatingLoop: {
    screen: selfRatingLoopScreen,
  },
  selfRatingMain:{
    screen: selfRatingMainScreen
  },
  selfRatingFinish: {
    screen: selfRatingFinishScreen,
  },
  idealRatingIntro: {
    screen: idealRatingIntroScreen,
  },
  idealRatingMain:{
    screen: idealRatingMainScreen
  },
  idealRatingLoop: {
    screen: idealRatingLoopScreen,
  },
  idealRatingFinish: {
    screen: idealRatingFinishScreen,
  },
  profile: {
    screen: profileScreen,
  },
  profileDetails: {
    screen: profileDetailsScreen,
  },
  demoScreen: {
    screen: demoScreen,
  },
  initDashboard: {
    screen: initDashboardScreen,
  },
  dashboard: {
    screen: dashboardScreen,
  },
  finished: {
    screen: finishedScreen
  },
  loop: {
    screen: LoopScreen,
  },
  loopIntro: {
    screen: loopIntroScreen,
  },
  loopHow: {
    screen: loopHowScreen,
  },
  loopReminder: {
    screen: loopReminderScreen,
  },

  loopReminderEnd: {
    screen: loopCoachReminderEndScreen,
  },
  loopReminderEndNext: {
    screen: loopCoachReminderEndNextScreen,
  },
  loopCoachReflectionIntro: {
    screen: loopCoachReflectionIntroScreen,
  },
  loopReflection: {
    screen: loopReflectionScreen,
  },
  loopCoachReflectionAfter: {
    screen: loopCoachReflectionAfterScreen,
  },
}, {
  header: null,
  initialRouteName: 'home',
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  },
  /*transitionConfig: TransitionConfiguration,*/
})



