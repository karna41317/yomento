import React, { PropTypes, Component } from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { GradientWrapper } from 'src/components'
import AppNavigator from './Navigator'

class NavigatorView extends Component {
  static displayName = 'NavigationView'

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigatorState: PropTypes.shape({
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
              state: this.props.navigatorState,
            })
          }
        />
      </GradientWrapper>
    )
  }
}

export default NavigatorView
