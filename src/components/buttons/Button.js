import React, { Component, PropTypes } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

export class Button extends Component {
  render () {
    return (
      <TouchableOpacity style={[styles.container, this.props.style]} onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}

Button.defaultProps = {
  width: 179,
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 47,
    paddingRight: 47,
    backgroundColor: '#6c56b7',
    borderRadius: 30,
    alignItems: 'stretch',
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 1,
    },
    margin: 5
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 3,
  },
})