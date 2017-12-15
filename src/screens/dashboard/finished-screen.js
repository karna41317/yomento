import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
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

const normalHeight = 220
const extendedHeight = 320
const headerPadding = 20

@connect(dashboardSelector)
export default class DashboardScreen extends Component {
  goToSetting = () => {
    this.props.navigation.navigate('profile')
  }

  constructor (props) {
    super(props)
    this.state = {
      showMainCard: this.showMainCard(),
    }
  }

  showMainCard = () => {
    return true
  }

  componentWillMount () {
    this.props.dispatch(getDashboardCards())
  }

  componentDidUpdate () {
    this.skipFutureCards()
  }

  skipFutureCards = () => {
    const {dashboard: {finishedCards}} = this.props
    if (finishedCards && finishedCards.length > 0) {
      let scrollHeight = finishedCards.length * normalHeight
      scrollHeight = scrollHeight + (finishedCards.length * 10)
      if (this.scrollView) {
        this.scrollView.scrollTo({x: 0, y: scrollHeight, animated: true})
      }
    }
  }

  updateCard = (loopId, cardType, nextScreen) => {
    const {dispatch, loop, navigation} = this.props

    if (loopId) {
      const pathParams = {
        card_type: cardType,
        loop_id: loopId,
      }
      bodyParams = {}

      const params = {
        pathParams,
        bodyParams,
        nextScreen,
      }
      dispatch(updateCards(params, navigation))
    }
  }

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }

  finishedCards = () => {
    const {dashboard: {finishedCards}} = this.props
    if (finishedCards && finishedCards.length > 0) {
      return map(finishedCards, (card, index) => {
        const style = {
          flex: 1,
          height: normalHeight,
          backgroundColor: '#9696A5',
          marginHorizontal:20
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
  scrollToFinished = () => {
    this.props.navigation.navigate('dashboard')
  }
  getHomeButton = () => {
    return (
      <View style={customStyles.header}>

        <TouchableOpacity
          onPress={this.scrollToFinished}
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
      return <ActivityIndicator/>
    } else {
      return (
        <GradientWrapper name={'default'}>
          {/*<View style={{backgroundColor: 'transparent'}}>
            {this.getHeader()}
            <View style={styles.dashboardWrapper}>
              <ScrollView
                ref={this.refScrollView}
                automaticallyAdjustContentInsets={false}
                onScroll={() => {}}
                scrollEventThrottle={200}
                showsVerticalScrollIndicator={false}>
                {this.getFutureCards()}
              </ScrollView>
              <View style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                flex: 1,
                flexDirection:'column'
              }}>


              </View>

            </View>
          </View>*/}

          {this.finishedCards()}

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
