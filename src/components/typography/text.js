/**
 * Created by Karan on 2017-11-06.
 */
import React, { Component, StyleSheet } from 'react'
import { Text as NativeText, View } from 'react-native'

export class LightText extends Component {
  return <NativeText style={styles.text}>{this.props.children}</NativeText>
}

export class RegularText extends Component {
  return <NativeText style={styles.text}>{this.props.children}</NativeText>
}

export class BoldText extends Component {
  return <NativeText style={styles.text}>{this.props.children}</NativeText>
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'TabletGothic-Bold',
    fontSize: 14,
    fontWeight: '100',
  }
})
