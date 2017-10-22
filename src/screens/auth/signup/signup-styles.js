import { StyleSheet } from 'react-native'
import { getPlatformValue } from './../../../utils'

export const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: getPlatformValue('android', 10, 30),
  },
  formContainer: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: getPlatformValue('android', 5, 34),
    //backgroundColor: '#ffffff'
  },
})