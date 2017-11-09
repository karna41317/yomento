'use strict'
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Slider as RNSlider,
  SliderIOS,
  Dimensions,
} from 'react-native'

import { Slider } from 'src/components/slider'

var DEFAULT_VALUE = 0.3

class SliderContainer extends Component {
  constructor () {
    super()
    this.state = {
      value: DEFAULT_VALUE,
    }
  }

  render () {
    var value = this.state.value

    return (
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.caption}
                numberOfLines={1}>{this.props.caption}</Text>
          <Text style={styles.value} numberOfLines={1}>{value}</Text>
        </View>
        {this._renderChildren()}
      </View>
    )
  }

  _renderChildren () {
    return React.Children.map(this.props.children, (child) => {
      if (child.type === Slider
        || child.type === RNSlider) {
        var value = this.state.value
        return React.cloneElement(child, {
          value: value,
          onValueChange: (val) => this.setState({value: val}),
        })
      } else {
        return child
      }
    })
  }
}

export class SliderScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value :DEFAULT_VALUE,
      progress: 0
    }
  }
  componentDidMount() {
    const interval = setInterval(() => {
      if (this.state.progress > 0.9) return clearInterval(interval);

      this.setState(state => {
        return {
          progress: state.progress + 0.1,
        };
      });
    }, 1000);
  }
  render () {

    return (
      <ScrollView contentContainerStyle={styles.wrapper}>
        <View style={[
          styles.overlay,
          {height: Dimensions.get('window').height * this.state.progress}]}/>
        <Slider
          orientation={'vertical'}
          inverted={true}
          style={styles.container}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          minimumTrackTintColor='#31a4db'
          thumbTouchSize={{width: 50, height: 50}}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: Dimensions.get('window').height,
    flex: 1,
    justifyContent: 'center',
    /*alignItems:'center',*/

  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  caption: {
    //flex: 1,
  },
  value: {
    flex: 1,
    textAlign: 'right',
    marginLeft: 10,
  },
  container: {
    //height: 100,
    transform: [
      {rotateZ: '-90deg'},
    ],
  },
  track: {
    height: 1,
    backgroundColor: 'red',
  },
  thumb: {
    width: 10,
    height: 10,
    backgroundColor: '#31a4db',
    borderRadius: 10 / 2,
    shadowColor: '#31a4db',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  overlay: {
    height: 0,
    width: Dimensions.get('window').width,
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#12124B',
    borderTopLeftRadius: Dimensions.get('window').width * 0.5,
    borderTopRightRadius: Dimensions.get('window').width * 0.5,
    marginBottom: -20,

  },
})




