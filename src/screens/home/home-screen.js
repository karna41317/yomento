/**
 * Created by Karan on 2017-10-22.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, StyleSheet, AsyncStorage, Text, Dimensions } from 'react-native'
import { Button } from 'src/components/buttons'
import GradientWrapper from 'src/components/partials/gradientWrapper'
import { toLogin } from 'src/actions'

@connect()
export default class Home extends Component {

  constructor (props) {
    super(props)
  }

  goToLogin = () => {
    const {navigation} = this.props
    navigation.navigate('login')
  }

  render () {
    return (
      <GradientWrapper>
        <View style={styles.container}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button onPress={this.goToLogin}>
              goToLogin
            </Button>
          </View>
        </View>
      </GradientWrapper>
    )
  }
}

Home.propTypes = {
  disableInteractionCheck: PropTypes.bool,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})
