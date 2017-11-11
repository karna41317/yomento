/**
 * Created by Karan on 2017-10-23.
 */
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class GradientWrapper extends Component {

  getWrapper = (name) => {
    switch (name) {
      case 'onBoarding':
        return (
          <LinearGradient colors={[
            '#0B0B48',
            '#0F0E4E',
            '#0F0F55',
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
      default:
        return this.props.children ? this.props.children : null
    }
  }

  render () {
    return this.getWrapper(this.props.name)
  }
}
