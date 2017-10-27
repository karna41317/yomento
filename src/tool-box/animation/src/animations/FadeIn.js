import React, { Component } from 'react';
import { View } from 'src/tool-box/components';
import { DriverShape } from '../drivers/DriverShape';
export class FadeIn extends Component {
  static propTypes = {
    /**
     * An instance of animation driver, usually ScrollDriver
     */
    driver: DriverShape.isRequired,
    /**
     * Components to which an effect will be applied
     */
    children: React.PropTypes.node,
    /**
     * pair of [start, end] values from animation driver, how
     * children would fade in
     */
    inputRange: React.PropTypes.array,
  }

  render() {
    const { driver, children, inputRange = [0, 1], style } = this.props;

    return (
      <View
        driver={driver}
        animationName="fadeIn"
        animationOptions={{ inputRange }}
        style={{ opacity: 0, ...style }}
      >
        {children}
      </View>
    );
  }
}
