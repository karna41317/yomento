import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Spinner} from 'src/components'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { get, toUpper, head, map, each, sortBy, includes } from 'lodash'
import { styles } from './dashboard.styles'
import {
  Header, Button, Icon, Left, Body, Right, DeckSwiper,
} from 'src/components/native-base'
import { semiBoldTextMixin } from '../../styles/mixins'
import { getDashboardCards, getLoops, updateDashboardCards, updateCards } from 'src/actions'
import { connect } from 'react-redux'
import { dashboardSelector } from './dashboard-selector'
import { PrimaryButton, SecondaryButton } from '../../components/buttons/Button'
import {logEvents} from 'src/services/analytics'
const normalHeight = 220
const extendedHeight = 320
const headerPadding = 20

@connect(dashboardSelector)
export default class DashboardScreen extends Component {

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }

  goToHow = (item) => {
    const {navigation, dispatch} = this.props
    this.fireEvents(`dashboard.finishedcard.${item.theme_name}.button.how`, item)
    dispatch(getLoops(item.loop_id))
    /*TODO: Fix for only how screen*/
    navigation.navigate('loopHow', {howRoute: true})
  }

  fireEvents = (eventName, params = {}) => {
    logEvents(eventName, params)
  }


  finishedCards = () => {
    const {dashboard: {finishedCards}} = this.props
    if (finishedCards && finishedCards.length > 0) {
      return map(finishedCards, (card, index) => {
        const style = {
          flex: 1,
          height: normalHeight,
          backgroundColor: '#9696A5',
          marginHorizontal: 20,
        }

        return (
          <View
            style={[styles.completedCard, style]}
            key={index}>
            <View style={styles.textWrapper}>
              <View style={styles.textHeadWrapper}>
                <Text style={styles.profileIntroHead}>
                  {toUpper(card.theme_name)}
                </Text>
              </View>
              <View style={{marginVertical: 20}}>
                <Text
                  style={styles.profileIntroText}>
                  {card.loop_title}
                </Text>
              </View>

              <View style={styles.ButtonsWrapper}>
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                  <Icon
                    name={
                      card.card_status && card.card_status === 'not_interested'
                        ? 'md-close'
                        : 'md-checkmark'
                    }
                    style={styles.finishedCardStatusIcon}/>
                  <SecondaryButton
                    upper
                    style={{minWidth: 80, paddingHorizontal: 5, borderWidth: 0}}
                    textStyles={{color: '#FFFFFF'}}
                    onPress={() => {}}>
                    {toUpper(card.card_status)}
                  </SecondaryButton>
                </View>
                <PrimaryButton
                  upper
                  style={{minWidth: 100}}
                  textStyles={{color: '#FFFFFF'}}
                  onPress={this.goToHow.bind(this,
                    card)}>How?</PrimaryButton>
              </View>
            </View>
          </View>
        )
      })
    }
    return null
  }
  refScrollView = view => {
    this.scrollView = view
  }
  goToHome = () => {
    this.props.navigation.navigate('dashboard')
  }
  getHomeButton = () => {
    return (
      <View style={customStyles.header}>

        <TouchableOpacity
          onPress={this.goToHome}
          style={customStyles.finishedButton}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
            <Icon name='ios-arrow-round-down'
                  style={[customStyles.finishedText, {fontSize: 24}]}/>
            <Text style={customStyles.finishedText}>HOME</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }

  render () {
    const {dashboard: {fetching}} = this.props
    if (fetching) {
      return <Spinner/>
    } else {
      return (
        <GradientWrapper name={'default'}>
          <View style={{height: Dimensions.get('window').height - 70}}>
            <ScrollView
              ref={this.refScrollView}
              automaticallyAdjustContentInsets={false}
              onScroll={() => {}}
              scrollEventThrottle={200}
              showsVerticalScrollIndicator={false}>
              {this.finishedCards()}
            </ScrollView>
          </View>
          {this.getHomeButton()}
        </GradientWrapper>
      )
    }

  }
}

const customStyles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  finishedButton: {
    minWidth: 130,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 60,
    height: 35,
    marginVertical: 20,
  },
  finishedText: {
    marginHorizontal: 10,
    ...semiBoldTextMixin(14, '#FFF')
  },
})
