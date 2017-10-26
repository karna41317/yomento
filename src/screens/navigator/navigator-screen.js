/**
 * Created by Karan on 2017-10-25.
 */
import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { addNavigationHelpers } from 'react-navigation'
import { navSelector } from './navigator-selector'
import GradientWrapper from 'src/components/partials/gradientWrapper'
import { AppNavigator } from 'src/routes'

@connect(navSelector)
export class NavigatorView extends Component {
  static displayName = 'NavigationView'

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.shape({
      index: PropTypes.number.isRequired,
      routes: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        routeName: PropTypes.string.isRequired,
      })),
    }).isRequired,
  }

  render () {
    return (
      <GradientWrapper>
        <AppNavigator
          navigation={
            addNavigationHelpers({
              dispatch: this.props.dispatch,
              state: this.props.nav,
            })
          }
        />
      </GradientWrapper>
    )
  }
}







