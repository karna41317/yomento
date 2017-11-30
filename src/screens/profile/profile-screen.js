import React, { Component } from 'react'
import { View, Text } from 'react-native'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon, Button } from 'native-base'
import { styles } from './profile.styles'
import { PrimaryButton, SecondaryButton } from '../../components/buttons/Button'
import Radar from 'src/components/radar_chart/Radar'
import { connect } from 'react-redux'
import { profileState } from 'src/selectors'
import { profileLanunched, getDashboardCards } from 'src/actions'

@connect(profileState)
export default class ProfileScreen extends Component {

  settingsPress = () => {
    this.props.navigation.navigate('profileDetails')
  }

  closePress = () => {
    this.props.navigation.navigate('dashboard')
  }

  componentDidMount = () => {
    this.props.dispatch(getDashboardCards())
  }

  getAllProfileButtons = () => {
    return (
      <View style={[
        styles.headerStyle,
        {
          marginHorizontal: 10,
          marginBottom: 30,
        }]}>
        <PrimaryButton
          textStyles={styles.profileButtonText}
          style={{backgroundColor: '#CE1CD4'}}>All user's
          self-rate</PrimaryButton>
        <PrimaryButton
          textStyles={styles.profileButtonText}
          style={{backgroundColor: '#0079FF'}}>All user's
          Ideal</PrimaryButton>
      </View>
    )
  }

  launchDashboard = () => {
    this.props.dispatch(profileLanunched())
    this.props.navigation.navigate('dashboard')
  }

  getLaunchButton = () => {
    return (
      <PrimaryButton
        onPress={this.launchDashboard}
        upper
        textStyles={styles.profileButtonText}
        style={styles.profileFooterButtons}>
        cool, what's next?
      </PrimaryButton>
    )
  }

  render () {
    console.log('printing', this.props)

    const data = {
      variables: [
        {key: 'communication', label: 'COMMUNICATION'},
        {key: 'team', label: 'TEAM'},
        {key: 'delegation', label: 'DELEGATION'},
        {key: 'time_management', label: 'TIME MANAGEMENT'},
        {key: 'performance', label: 'PERFORMANCE'},
        {key: 'feedback', label: 'FEEDBACK'},
      ],
      sets: [
        {
          key: 'Ideal',
          label: 'Ideal',
          values: {
            feedback: 10,
            communication: 8,
            team: 9,
            delegation: 7,
            time_management: 2,
            performance: 7,
          },
        },
        {
          key: 'Self',
          label: 'Self',
          values: {
            feedback: 8,
            communication: 6,
            team: 7,
            delegation: 2,
            time_management: 8,
            performance: 7,
          },
        },
        {
          key: 'All Ideal',
          label: 'All Ideal',
          values: {
            feedback: 8,
            communication: 5,
            team: 6,
            delegation: 7,
            time_management: 5,
            performance: 8,
          },
        },
        {
          key: 'All Self',
          label: 'All Self',
          values: {
            feedback: 7,
            communication: 7,
            team: 9,
            delegation: 8,
            time_management: 8,
            performance: 8,
          },
        },
      ],
    }

    return (
      <GradientWrapper name={'default'}>
        <View backgroundColor={'transparent'} style={styles.headerStyle}>
          <Button transparent onPress={this.settingsPress}>
            <Icon name='settings' style={{fontSize: 30, color: '#419BF9'}}/>
          </Button>
          <Text style={styles.headerTextStyle}>Your Profile</Text>
          <Button transparent onPress={this.closePress}>
            <Icon name='close' style={{fontSize: 40, color: '#419BF9'}}/>
          </Button>
        </View>
        <View style={styles.headerStyle}>
          <SecondaryButton
            style={[styles.profileSecondaryButtons, {borderColor: '#FFFA67'}]}
            textStyles={styles.profileButtonText}>
            My Ideal
          </SecondaryButton>
          <SecondaryButton
            style={[styles.profileSecondaryButtons, {borderColor: '#FFF'}]}
            textStyles={styles.profileButtonText}>
            My Self
          </SecondaryButton>
          <SecondaryButton
            style={[styles.profileSecondaryButtons, {borderColor: '#A7FBA9'}]}
            textStyles={styles.profileButtonText}>
            My Team
          </SecondaryButton>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Radar
            width={400}
            height={400}
            padding={70}
            domainMax={10}
            highlighted={null}
            onHover={() => {}}
            data={data}
          />
        </View>
        <View>
          {
            this.props.firstLaunch
              ? this.getLaunchButton()
              : this.getAllProfileButtons()
          }
        </View>
      </GradientWrapper>
    )
  }
}

