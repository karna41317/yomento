import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, ActivityIndicator } from 'react-native'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { get, toUpper,head } from 'lodash'
import { styles } from './dashboard.styles'
import {
  Header, Button, Icon, Left, Body, Right, DeckSwiper,
} from 'src/components/native-base'

import { semiBoldTextMixin } from '../../styles/mixins'
import { getDashboardCards, getLoops, updateDashboardCards } from 'src/actions'
import { connect } from 'react-redux'
import { dashboard } from './dashboard-selector'
import { PrimaryButton } from '../../components/buttons/Button'

@connect(dashboard)
export default class DashboardScreen extends Component {
  goToSetting = () => {
    this.props.navigation.navigate('profile')
  }

  componentDidMount () {
    this.props.dispatch(getLoops())
  }

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }

  goToLoop = (item) => {

    const {dashboard: {mainCards}} = this.props
    const updatedCards = this.moveCardBack(mainCards, 1)


    this.props.dispatch(updateDashboardCards(updatedCards))
    this.props.navigation.navigate('loop', item)

  }

  moveCardBack= (arr, n) => {
    var L = arr.length;
    return arr.slice(L - n).concat(arr.slice(0, L - n));
  }

  render () {
    const {dashboard: {mainCards}} = this.props
    /*const mainCards = get(dashboardCards, 'main_card')
    const completedCards = get(dashboardCards, 'completed_card')
    const nextCards = get(dashboardCards, 'next_card')
    const redoCards = get(dashboardCards, 'redo_card')
    const mainCard = head(dashboardCards)*!/*/

    if (mainCards) {


      const mainCard = head(mainCards)
      console.log('printing toUpper(mainCard.theme_name)', toUpper(mainCard.theme_name))
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
              <View style={styles.mainCard}>
                <Text style={styles.profileIntroHead}>
                  {toUpper(mainCard.theme_name)}
                  </Text>
                <Text
                  style={styles.profileIntroText}>{mainCard.loop_title}</Text>
                <PrimaryButton style={styles.profileButton}
                               onPress={this.goToLoop.bind(this, mainCard)}>START</PrimaryButton>
              </View>
            </View>
          </ScrollView>
        </GradientWrapper>
      )
    }
    return <ActivityIndicator />

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
