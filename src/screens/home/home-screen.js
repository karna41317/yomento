/**
 * Created by Karan on 2017-10-22.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Button } from 'src/components/buttons'
import GradientWrapper from 'src/components/partials/gradientWrapper'
import { toLogin } from 'src/actions'
import { Heading, Stage, Tile, Title, Overlay, Subtitle, Text, Icon } from '../../tool-box/components'

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
            <Stage title="Header / Shop item">
              <Tile styleName="text-centric">
                <Overlay
                  styleName="image-overlay"><Heading>-20%</Heading></Overlay>
                <Title styleName="md-gutter-top">COOL BLACK AND WHITE STYLISH
                  WATCHES</Title>
                <Subtitle
                  styleName="line-through sm-gutter-top">$280.00</Subtitle>
                <Heading>$250.00</Heading>
                <Button styleName="secondary md-gutter-top"><Icon
                  name="cart"/><Text>ADD TO BASKET</Text></Button>
              </Tile>
            </Stage>
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
