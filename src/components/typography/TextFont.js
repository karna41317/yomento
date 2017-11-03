import React, { Component, PropTypes } from 'react'
import { Text, StyleSheet } from 'react-native'
import { getStyleFromProps } from '../../utils/index'

export default class TextFont extends Component {
  render () {
    return <Text {...this.props} style={[styles.textStyle, this.props.style]}>
      {this.props.children}
    </Text>
  }
}

TextFont.defaultProps = {
  fontFamily: 'Raleway',
  fontWeight: '400',
  color: '#ffffff',
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
    fontFamily: 'Raleway',
    fontWeight: '400',
    color: '#ffffff',
    backgroundColor: 'transparent'
  }
})

TextFont.propTypes = {
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.number,
  marginTop: PropTypes.number,
  color: PropTypes.string,
}

