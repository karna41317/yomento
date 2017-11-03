/**
 * Created by Karan on 2017-10-28.
 */
/**
 * Created by Karan on 2017-10-28.
 */

import React, { Component } from 'react'
import { View, StyleSheet, TextInput} from 'react-native'

export class ViewWrapper extends Component {
  render () {
    return (
      <TextInput
        placeholder='First Name'
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.firstName}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
})