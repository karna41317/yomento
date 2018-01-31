/**
 * Created by Karan on 2017-11-11.
 */

import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import readMoreData from './read-more-data'
import { Icon } from 'src/components/native-base'
import { boldTextMixin, extraBoldTextMixin, regularTextMixin, semiBoldTextMixin } from '../../styles/mixins'
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
          <Text style={styles.heading}>
            {title}
          </Text>
        </View>
        <ScrollView style={[styles.bodyTextWrapper, {flex: 1}]}>
            <View style={styles.paraText}>
              <Text style={styles.headText}>
                A Personal Leadership Trainer
              </Text>
              <Text style={styles.normalText}>
                Yomento is a personal leadership trainer, inspired by Cognitive Behavioral Therapy (CBT), to help leaders develop their core leadership skills and behaviors.
              </Text>
            </View>


          <View style={styles.paraText}>
            <Text style={styles.headText}>
              Leadership is like a muscle…
            </Text>
            <Text style={styles.normalText}>
              We believe that leadership is like any other skill. A practicable, learnable skill.
            </Text>
            <Text style={styles.normalText}>
              Think of it as a muscle. If one goes to the gym and exercises every day, the muscles grow. If one stops exercising, the muscles will not grow.
            </Text>
            <Text style={styles.normalText}>This means anyone is capable of developing their leadership skills. If one invests time and effort in their practice.
            </Text>
            <Text style={styles.normalText}>So, with Yomento, a leader practices her leadership at work, in real life. Not in a classroom.
            </Text>
          </View>

          <View style={styles.paraText}>
            <Text style={styles.headText}>
              Based on the latest research
            </Text>
            <Text style={styles.normalText}>
              We have gathered experienced leaders and scientists and combined them with the latest research and training methods, in order to help the modern leader to practice her leadership in an effective way.
            </Text>
          </View>

          <View style={styles.paraText}>
            <Text style={styles.headText}>
              Individualized training
            </Text>
            <Text style={styles.normalText}>
              To make a training effective for a leader, it needs to be individualized. That’s why we use technology to make a smart Personal Trainer who can challenge the leader based on who she is and what context she leads in.
            </Text>
          </View>

          <View style={styles.paraText}>
            <Text style={styles.headText}>
              Core leadership skills
            </Text>
            <Text style={styles.normalText}>
              With Yomento, the leader practices core leadership skills. We believe any leader need to master core leadership skills, wherever and whoever you lead.
            </Text>
            <Text style={styles.normalText}>
              The objective is to make the team engaged, innovative and productive - happily working together towards a shared vision and goals.

            </Text>
          </View>


          <View style={styles.paraText}>
            <Text style={styles.headText}>
              The 6 core leadership areas
            </Text>
            <Text style={styles.normalText}>
              • Communication
              • Feedback
              • Team
              • Time management
              • Performance Development
              • Delegation
            </Text>
            <Text style={styles.normalText}>
              The objective is to make the team engaged, innovative and productive - happily working together towards a shared vision and goals.

            </Text>
          </View>


          <View style={styles.paraText}>
            <Text style={styles.headText}>
              A unique training format
            </Text>
            <Text style={styles.normalText}>
              With Yomento, the leader practices core leadership skills. We believe any leader need to master core leadership skills, wherever and whoever you lead.
            </Text>
            <Text style={styles.normalText}>
              In every core leadership area, the leader has certain behaviors to practice. To make the training effective, we have created a bite-sized training format we call “Loops”.

            </Text>
          </View>


          <View style={styles.paraText}>
            <Text style={styles.headText}>
              A loop looks like this
            </Text>

            <Text style={styles.normalText}>
              • You get challenged to take an
              action.
              • Understand why the action is
              important and how you will do
              it.
              • Practice the action in real life.
              • Reflect on your practice to
              understand how it affects your
              leadership.
            </Text>
          </View>

        </ScrollView>

      </GradientWrapper>

    )
  }
}

const styles = StyleSheet.create({
  headText: {
    ...extraBoldTextMixin(18, '#FFFFFF')
  },
  normalText: {
    ...regularTextMixin(18, '#FFFFFF')
  },
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
    width: 70,
    left: 70,
    fontSize: 50,
    color: '#0079FF',
    marginLeft: 0,
  },
  bodyTextWrapper: {
    position: 'absolute',
    top: 150,
    left: 20,
    right: 20,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width-20,
    backgroundColor: 'transparent',
  },
  paraText: {
    margin:10
  }
})

const htmlStyles = StyleSheet.create({
  p: {
    ...regularTextMixin(18, '#FFFFFF')
  },
})
