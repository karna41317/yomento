/**
 * Created by Karan on 2017-10-23.
 */
import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'

export default class BackgroundWrapper extends Component {
  render() {
    return (
      <LinearGradient colors={['#0B0B48', '#0F0E4E', '#0F0F55', '#111059', '#17166D', '#181776', '#1D1C80', '#1E1D85']} style={{flex: 1}}>
        {this.props.children ? this.props.children : null}
      </LinearGradient>
    )
  }
}