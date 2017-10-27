/**
 * Created by Karan on 2017-10-28.
 */

import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native'

export class ViewWrapper extends Component {
  render () {
    return (
      <View style={[styles.container, this.props.style]} onPress={this.props.onPress}>
        {this.props.children}
      </View>
    )
  }
}

ViewWrapper.defaultProps = {
  width: 179,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
})