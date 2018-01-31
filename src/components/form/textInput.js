import React, { Component, PropTypes } from 'react'
import { View, TouchableOpacity, TextInput, StyleSheet , Dimensions} from 'react-native'
import {Icon} from 'react-native-elements'

export default class CustomTextInput extends Component {
  render () {
    const {iconName, name} = this.props
    return (
      <View style={styles.inputWrapper}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    width: Dimensions.get('window')-50,
    borderColor: '#0F0F3D'
  }
})
