/**
 * Created by Karan on 2017-12-12.
 */
/**
 * Created by Karan on 2017-12-12.
 */
/**
 * Created by Karan on 2017-12-09.
 */
import React, { Component } from 'react'
import { Platform } from 'react-native'
import CodePush from 'react-native-code-push'

class CodePushController extends Component {

  constructor (props) {
    super(props)
    this.state = {restartAllowed: true}
  }
  componentDidMount () {
    CodePush.sync({
      updateDialog: true,
      installMode: CodePush.InstallMode.IMMEDIATE,
    })
  }

  render () {
    return null
  }
}

let codePushOptions = {checkFrequency: CodePush.CheckFrequency.MANUAL}
const App = CodePush(codePushOptions)(CodePushController)
