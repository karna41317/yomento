/**
 * Created by Karan on 2017-11-25.
 */
import React, { Component } from 'react'
import {

  StyleSheet,
  Text,
  View,
  PanResponder,
} from 'react-native'
import { DatePicker } from 'src/components/datetime-picker'

export default class TimePicker extends Component {

  constructor (props) {
    super(props)

    this.state = {
      date: '',
      time: '20:00',
      datetime: '2016-05-05 20:00',
      datetime1: '2016-05-05 20:00',
    }
  }

  componentWillMount () {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e) => {

        return true
      },
      onMoveShouldSetPanResponder: (e) => {

        return true
      },
      onPanResponderGrant: (e) => console.log('onPanResponderGrant'),
      onPanResponderMove: (e) => console.log('onPanResponderMove'),
      onPanResponderRelease: (e) => console.log('onPanResponderRelease'),
      onPanResponderTerminate: (e) => console.log('onPanResponderTerminate'),
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>datetime: {this.state.datetime}</Text>
        <DatePicker
          style={{width: 200}}
          date={this.state.datetime1}
          mode="datetime"
          format="YYYY-MM-DD HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          minuteInterval={30}
          onDateChange={(datetime) => {this.setState({datetime1: datetime})}}
        />
        <Text
          style={styles.instructions}>datetime: {this.state.datetime1}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
