import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import Swiper from 'react-native-swiper'
import { authSelector } from '../../selectors/common'

var styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#0F0F3D',
    paddingTop: 100,
  },
  heading: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '300',
    marginHorizontal: 25,
    marginBottom: 50,

  },
  text: {
    marginHorizontal: 25,
    color: '#fff',
    fontSize: 25,
    fontWeight: '100',
    marginVertical: 10,
  },
  nextView: {
    width: 180,
    padding: 15,
    borderRadius: 90,
    backgroundColor: '#0079FF',
    position: 'absolute',
    right: 20,
    top: 200,
  },
  nextText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
})
@connect(authSelector)
export default class SwiperScreen extends Component {
  constructor () {
    super()
    this.state = {
      nextText: null,
    }
  }

  nextButton = (index) => {
    const nextText = [
      'OK, NEXT?', 'GOT IT.', 'SOUNDS GREAT!', 'ALRIGHT, NEXT!', 'I’M READY!',
    ]
    return (
      <View style={styles.nextView}>
        <Text style={styles.nextText}>{'Next'}</Text>
      </View>
    )
  }
  /*  renderNextButton() {
      return (
        <View style={styles.nextView}>
          <Text style={styles.nextText}>{'Next'}</Text>
        </View>
      )
    }*/

  /*  indexChanged = (index) => {
      //console.log('printing', index)
      if (index === 4) {
        return this.renderNextButton()
      }
    }*/
  render () {

    const {user: {userName}} = this.props
    return (
      <Swiper style={styles.wrapper}
              scrollEnabled={false}
              showsButtons={true}
              loop={false}
              showsPagination={false}
              indexChanged={index => console.log(index)}
              prevButton={() => null}
              nextButton={this.nextButton()}>
        <View style={styles.slide}>
          <View>
            <Text style={styles.heading}>Hey {userName || 'Henrik'},
              welcome!</Text>
            <Text style={styles.text}>I’m your own Personal Leadership Trainer
              and I have one simple goal:

            </Text>
            <Text style={styles.text}>To develop your leadership skills.
            </Text>
          </View>
        </View>
        <View style={styles.slide}>
          <View>
            <Text style={styles.heading}>Tailor-made training
              skills.</Text>
            <Text style={styles.text}>Based on your strengths and weaknesses
              you’ll get your own training program.
            </Text>

          </View>
        </View>
        <View style={styles.slide}>
          <View>
            <Text style={styles.heading}>Small actions, big impact</Text>
            <Text style={styles.text}>When we work together, you practice one
              action at a time that has big impact on your team’s engagement.
            </Text>

          </View>
        </View>
        <View style={styles.slide}>
          <View>
            <Text style={styles.heading}>Driving new behavior</Text>
            <Text style={styles.text}>I will ask you to reflect after every
              action, to help you understand how it affects your core leadership
              skills.
            </Text>
          </View>
        </View>
        <View style={styles.slide}>
          <View>
            <Text style={styles.heading}>Let’s start your journey!
            </Text>
            <Text style={styles.text}>As your PT, I would like to get to know
              you a bit, so you can get your personalized training program.
            </Text>
            <Text style={styles.text}>Are you ready?
            </Text>
          </View>
        </View>
      </Swiper>
    )
  }
}
