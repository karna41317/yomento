import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { upperCase } from 'lodash'

export class PrimaryButton extends Component {
  render () {
    return (
      <TouchableOpacity style={[styles.primaryContainer, this.props.style]}
                        onPress={this.props.onPress}>
        <Text style={styles.primaryText}>{upperCase(this.props.children)}</Text>
      </TouchableOpacity>
    )
  }
}

export class SecondaryButton extends Component {

  render () {
    return (
      <TouchableOpacity style={[styles.secondaryContainer, this.props.style]}
                        onPress={this.props.onPress}>
        <Text style={styles.secondaryText}>{upperCase(this.props.children)}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  primaryContainer: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#6c56b7',
    borderRadius: 30,
    alignItems: 'stretch',
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    minWidth: 150,
    shadowOffset: {
      height: 2,
      width: 1,
    },
  },
  secondaryContainer: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    borderRadius: 30,
    borderColor: '#9595A4',
    borderWidth: 1,
    alignItems: 'stretch',
    minWidth: 150,
  },
  primaryText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: 2,
  },
  secondaryText: {
    color: '#0F0F3D',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: 2,
  }
})
