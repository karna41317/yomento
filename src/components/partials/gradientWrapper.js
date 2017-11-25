/**
 * Created by Karan on 2017-10-23.
 */
import React, { Component } from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class GradientWrapper extends Component {

  getWrapper = (name) => {
    switch (name) {
      case 'onBoarding' :
      case 'intro' :
      case 'default' :
        return (
          <LinearGradient colors={[
            '#0b0b44',
            '#0e0d48',
            '#0f0f51',
            '#111059',
            '#17166D',
            '#181776',
            '#1D1C80',
            '#1E1D85',
          ]} style={{flex: 1}}>
            {this.props.children ? this.props.children : null}
          </LinearGradient>
        )
      case 'rate' :
        return (
          <LinearGradient colors={[
            '#F0F0EB',
            '#F0F0EB',
            '#F0F0EB',
          ]} style={{flex: 1}}>
            {this.props.children ? this.props.children : null}
          </LinearGradient>
        )
      case 'reminder' :
      case 'how' :
      case 'loophow' :
        return (
          <LinearGradient colors={[
            '#FFFBCD',
            '#FFFBCD',
            '#FFFBCD',
            '#FFFBCD',
            '#FFFBCD',
          ]} style={{flex: 1}}>
            {this.props.children ? this.props.children : null}
          </LinearGradient>
        )

      case 'reflection' :
        return (
          <LinearGradient colors={[
            '#D5EDFF',
            '#D5EDFF',
            '#D5EDFF',
            '#D5EDFF',
          ]} style={{flex: 1}}>
            {this.props.children ? this.props.children : null}
          </LinearGradient>
        )

      default:
        return this.props.children ? this.props.children : null
    }
  }

  render () {
    return this.getWrapper(this.props.name)
  }
}
