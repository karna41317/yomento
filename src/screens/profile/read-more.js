/**
 * Created by Karan on 2017-11-11.
 */

import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import readMoreData from './read-more-data'
import { Icon } from 'native-base'
import { extraBoldTextMixin, regularTextMixin, semiBoldTextMixin } from '../../styles/mixins'
import GradientWrapper from '../../components/partials/gradientWrapper'
import HTMLView from 'react-native-htmlview'

export default class readMore extends Component {
  onIconPress = () => {
    this.props.navigation.goBack()
  }

  render () {
    const {title, description} = readMoreData
    return (
      <GradientWrapper name={'default'}>
        <View style={styles.formContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>LEADERSHIP PHIILOSOPHY</Text>
            <TouchableOpacity onPress={this.onIconPress}>
              <Icon active name='close'
                    style={[styles.icon, styles.closeIcon]}/>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.heading}>
          {title}
        </Text>
        <View>
          {/*<HTMLView
            value={description}
          />*/}
        </View>
      </GradientWrapper>

    )
  }
}

const styles = StyleSheet.create({
  heading: {
    ...extraBoldTextMixin(24, '#FFF'),
    position: 'absolute',
    top: 100,
    left: 40,
    right: 20,
    backgroundColor: 'transparent',
  },
  icon: {
    fontSize: 25,
    color: 'white',
    marginLeft: 10,
  },
  headerContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  headerText: {
    backgroundColor: 'transparent',
    ...semiBoldTextMixin(14, '#FFF'),
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  closeIcon: {
    left: 70,
    fontSize: 50,
    color: '#0079FF',
    marginLeft: 10,
  },
})

const htmlStyles = StyleSheet.create({
  p: {
    ...regularTextMixin(18, '#FFFFFF')
  },
})
