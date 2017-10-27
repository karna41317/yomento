/**
 * Created by Karan on 2017-10-22.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, Image, StyleSheet, } from 'react-native'
import { Button, Heading } from 'src/components'
import GradientWrapper from 'src/components/partials/gradientWrapper'
import { ViewWrapper } from '../../components/wrappers/viewWrapper'

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
          <ViewWrapper>
            <Heading>Yomento</Heading>
            <Heading>Text</Heading>
          </ViewWrapper>
          <Button onPress={this.goToLogin}>
            goToLogin
          </Button>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
})
