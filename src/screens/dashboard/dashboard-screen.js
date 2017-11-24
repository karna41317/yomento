import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { get, toUpper } from 'lodash'
import { styles } from './dashboard.styles'
import {
  Header, Button, Icon, Left, Body, Right, DeckSwiper,
} from 'src/components/native-base'

import { semiBoldTextMixin } from '../../styles/mixins'
import { getDashboardCards, getLoops } from 'src/actions'
import { connect } from 'react-redux'
import { dashboard } from './dashboard-selector'
import { PrimaryButton } from '../../components/buttons/Button'

@connect(dashboard)
export default class DashboardScreen extends Component {
  goToSetting = () => {
    this.props.navigation.navigate('profile')
  }

  componentDidMount () {
    this.props.dispatch(getDashboardCards())
    this.props.dispatch(getLoops())

  }

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }

  goToLoop = (item) => {
    this.props.navigation.navigate('loop', item)
  }

  render () {
    const {dashboard: {dashboardCards}} = this.props
    const mainCards = get(dashboardCards, 'main_card')
    const completedCards = get(dashboardCards, 'completed_card')
    const nextCards = get(dashboardCards, 'next_card')
    const redoCards = get(dashboardCards, 'redo_card')


    if (mainCards) {
      return (
        <GradientWrapper name={'default'}>
          <ScrollView style={{backgroundColor: 'transparent'}}>
            <Header backgroundColor={'transparent'} style={customStyles.header}>
              <Left>
                <Button transparent onPress={this.goToSetting}>
                  <Icon name='md-contact'
                        style={{fontSize: 30, color: '#419BF9'}}/>
                </Button>
              </Left>
              <Body>
              <Button iconLeft transparent rounded bordered info
                      style={customStyles.finishedButton}>
                <View style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                  <Icon name='ios-arrow-round-up'
                        style={[customStyles.finishedText, {fontSize: 24}]}/>
                  <Text style={customStyles.finishedText}>FINISHED</Text>
                </View>
              </Button>
              </Body>
              <Right></Right>
            </Header>
            <View style={styles.dashboardWrapper}>
              <DeckSwiper
                dataSource={mainCards}
                renderItem={item =>
                  <View style={styles.mainCard}>
                    <Text style={styles.profileIntroHead}>{toUpper(
                      item.theme_name)}</Text>
                    <Text
                      style={styles.profileIntroText}>{item.loop_title}</Text>
                    <PrimaryButton style={styles.profileButton}
                                   onPress={this.goToLoop.bind(this, item)}>START</PrimaryButton>
                  </View>
                }
              />

              {/*<View style={{marginTop: 100}}>
                <View style={styles.nextCard}>
                  <Text style={styles.profileIntroHead}>PROFILE</Text>
                  <Text style={styles.profileIntroText}>Rate yourself as a
                    leader</Text>
                  <PrimaryButton style={styles.profileButton}
                                 onPress={this.goToIdealRating}>START</PrimaryButton>
                </View>
                <View style={styles.nextCard}>
                  <Text style={styles.profileIntroHead}>PROFILE</Text>
                  <Text style={styles.profileIntroText}>Rate yourself as a
                    leader</Text>
                  <PrimaryButton style={styles.profileButton}
                                 onPress={this.goToIdealRating}>START</PrimaryButton>
                </View>
                <View style={styles.nextCard}>
                  <Text style={styles.profileIntroHead}>PROFILE</Text>
                  <Text style={styles.profileIntroText}>Rate yourself as a
                    leader</Text>
                  <PrimaryButton style={styles.profileButton}
                                 onPress={this.goToIdealRating}>START</PrimaryButton>
                </View>
                <View style={styles.nextCard}>
                  <Text style={styles.profileIntroHead}>PROFILE</Text>
                  <Text style={styles.profileIntroText}>Rate yourself as a
                    leader</Text>
                  <PrimaryButton style={styles.profileButton}
                                 onPress={this.goToIdealRating}>START</PrimaryButton>
                </View>
              </View>*/}
            </View>
          </ScrollView>
        </GradientWrapper>
      )
    }
    return null

  }
}

const customStyles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  finishedButton: {
    minWidth: 130,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 35,
  },
  finishedText: {
    marginHorizontal: 10,
    ...semiBoldTextMixin(14, '#FFF')
  },
})
