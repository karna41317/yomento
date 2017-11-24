import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { upperCase } from 'lodash'
import { boldTextMixin } from '../../styles/mixins'

export class PrimaryButton extends Component {

  render () {
    const {children, upper, onPress, style, textStyles} = this.props
    const textString = upper? upperCase(children) : children

    return (
      <TouchableOpacity style={[styles.primaryContainer, style]}
                        onPress={onPress}>
        <Text style={[styles.primaryText, textStyles]} numberOfLine={1}>{textString}</Text>
      </TouchableOpacity>
    )
  }
}

export class SecondaryButton extends Component {

  render () {
    const {children, upper, onPress, style, textStyles, transparent} = this.props
    return (
      <TouchableOpacity style={[styles.secondaryContainer, style]}
                        onPress={onPress}>
        <Text style={[styles.secondaryText, textStyles]} numberOfLine={1}>{upper
          ? upperCase(children)
          : children}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  primaryContainer: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#0079FF',
    borderRadius: 30,
    alignItems: 'stretch',
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    minWidth: 200,
    shadowOffset: {
      height: 2,
      width: 1,
    },
  },
  secondaryContainer: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    borderRadius: 30,
    borderColor: '#9595A4',
    borderWidth:1,
    alignItems: 'stretch',
    minWidth: 150,
  },
  primaryText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  secondaryText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
})
