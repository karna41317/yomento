import {
  Platform,
  Easing, Animated,
} from 'react-native'
import {
  TabNavigator,
  StackNavigator,
} from 'react-navigation'

import HomeScreen from '../../screens/home/home-screen'
import loginScreen from '../../screens/auth/login/login-screen'
import signupScreen from '../../screens/auth/signup/signup-screen'
import verfiyScreen from '../../screens/auth/verify/verify-screen'
import verificationCodeScreen from '../../screens/auth/verificationCode/verification-code-screen'
import passwordScreen from '../../screens/auth/password/password-screen'

const headerColor = '#39babd'
const activeColor = 'white'

const AppNavigator = StackNavigator({
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

export default AppNavigator
