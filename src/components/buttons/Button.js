import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { toUpper } from 'lodash'
import { boldTextMixin, semiBoldTextMixin } from '../../styles/mixins'

export class PrimaryButton extends Component {
  disabled = () => {

  }

  onPress = () => {
    if(this.props.disable) {
      this.disabled()
    } else {
      this.props.onPress()
    }
  }
  render () {
    const {children, upper, onPress, style, textStyles, disable} = this.props
    const textString = upper? toUpper(children) : children

    const disableStyle = {
      opacity: 0.5
    }


    let stylesList
    if(disable) {
      stylesList =  [style, disableStyle]
    } else {
      stylesList =  [style]
    }


    return (
      <TouchableOpacity disable={disable} style={[styles.primaryContainer, style]}
                        onPress={this.onPress}>
        <Text style={[styles.primaryText, textStyles]} numberOfLines={1}>{textString}</Text>
      </TouchableOpacity>
    )
  }
}

export class SecondaryButton extends Component {

  render () {
    const {children, upper, onPress, style, textStyles, transparent, disable} = this.props
    return (
      <TouchableOpacity  disable={disable} style={[styles.secondaryContainer, style]}
                         onPress={onPress}>
        <Text style={[styles.secondaryText, textStyles]} numberOfLines={1}>{upper
          ? toUpper(children)
          : children}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  primaryContainer: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: '#0079FF',
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
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    borderRadius: 30,
    minWidth: 150,
    borderColor: '#9595A4',
    borderWidth:1,
    alignItems: 'stretch',
  },
  primaryText: {
    textAlign: 'center',
    ...semiBoldTextMixin(14, '#FFF')
  },
  secondaryText: {
    textAlign: 'center',
    ...semiBoldTextMixin(14, '#FFF')
  },
})
