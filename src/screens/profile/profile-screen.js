import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon, Button } from 'native-base'
import { styles } from './profile.styles'
import { PrimaryButton, SecondaryButton } from '../../components/buttons/Button'
import Radar from 'src/components/radar_chart/Radar'
import { connect } from 'react-redux'
import { profileSelector } from './profile.selector'
import { profileLanunched, getDashboardCards } from 'src/actions'
import { map, get, each, snakeCase, toLower, toUpper, upperFirst, startCase, reject, has, some } from 'lodash'

const white = '#FFFFFF'
const myIdealColor = '#FFFA67'
const myTeamColor = '#A7FBA9'
const textColor = '#12124B'
const allSelfColor = '#CE1CD4'
const allIdealColor = '#0079FF'


@connect(profileSelector)
export default class ProfileScreen extends Component {
  constructor () {
    super()
    this.state = {
      mySelfActive: true,
      myTeamActive: false,
      myIdealActive: true,
      allIdealActive: true,
      allSelfActive: true,
      keys: ['myideal', 'myself', 'myteam', 'allideal_avg', 'allself_avg'],
    }
  }

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
        <SecondaryButton
          onPress={this.allSelfPress}
          style={[
            styles.profileSecondaryButtons,
            {
              borderColor: allSelfColor,
              backgroundColor: this.state.allSelfActive ? allSelfColor : 'transparent',
            }]
          }
          textStyles={[
            styles.profileButtonText, {
              color: this.state.allSelfActive ? white : white,
            }]}>

          All user's self-rate
        </SecondaryButton>
        <SecondaryButton
          onPress={this.allIdealPress}
          style={[
            styles.profileSecondaryButtons,
            {
              borderColor: allIdealColor,
              backgroundColor: this.state.allIdealActive ? allIdealColor : 'transparent',
            }]
          }
          textStyles={[
            styles.profileButtonText, {
              color: this.state.allIdealActive ? white : white,
            }]}>
          All user's Ideal
        </SecondaryButton>
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
  getKeys = (key) => {
    const keyExists = some(this.state.keys, o => has(o, key))
    if (keyExists) {
      return this.state.keys
    } else {
      return [...this.state.keys, key]
    }
  }

  mySelfPress = () => {
    this.setState({
      mySelfActive: !this.state.mySelfActive,
      keys: !this.state.mySelfActive ? this.getKeys('myself') : reject(
        this.state.keys, o => o === 'myself'),
    })
  }

  myIdealPress = () => {
    this.setState({
      myIdealActive: !this.state.myIdealActive,
      keys: !this.state.myIdealActive ? this.getKeys('myideal') : reject(
        this.state.keys, o => o === 'myideal'),
    })
  }

  allSelfPress = () => {
    this.setState({
      allSelfActive: !this.state.allSelfActive,
      keys: !this.state.allSelfActive ? this.getKeys('allself_avg') : reject(
        this.state.keys, o => o === 'allself_avg'),
    })
  }

  allIdealPress = () => {
    this.setState({
      allIdealActive: !this.state.allIdealActive,
      keys: !this.state.allIdealActive ? this.getKeys('allideal_avg') : reject(
        this.state.keys, o => o === 'allideal_avg'),
    })
  }

  myTeamPress = () => {
    this.setState({
      myTeamActive: !this.state.myTeamActive,
      keys: this.state.myTeamActive ? this.getKeys('myteam') : reject(
        this.state.keys, o => o === 'myteam'),
    })
  }

  getMyRatingButtons = () => {
    return (
      <View style={styles.headerStyle}>
        <SecondaryButton
          onPress={this.myIdealPress}
          style={[
            styles.profileSecondaryButtons,
            {
              borderColor: myIdealColor,
              backgroundColor: this.state.myIdealActive
                ? myIdealColor
                : 'transparent',
            }]
          }
          textStyles={[
            styles.profileButtonText, {
              color: this.state.myIdealActive ? textColor : white,
            }]}>
          My Ideal
        </SecondaryButton>
        <SecondaryButton
          onPress={this.mySelfPress}
          style={[
            styles.profileSecondaryButtons,
            {
              borderColor: white,
              backgroundColor: this.state.mySelfActive ? white : 'transparent',
            }]
          }
          textStyles={[
            styles.profileButtonText, {
              color: this.state.mySelfActive ? textColor : white,
            }]}>
          My Self
        </SecondaryButton>
        <SecondaryButton
          onPress={this.myTeamPress}
          style={[
            styles.profileSecondaryButtons,
            {
              borderColor: myTeamColor,
              backgroundColor: this.state.myTeamActive
                ? myTeamColor
                : 'transparent',
            }]
          }
          textStyles={[
            styles.profileButtonText, {
              color: this.state.myTeamActive ? textColor : white,
            }]}>
          My Team
        </SecondaryButton>
      </View>
    )
  }

  parseDataforRadar = (keys, inputData) => {
    console.log('printing', inputData)

    return map(keys, (key) => {
      const keyExist = inputData.some(o => key in o)
      if (keyExist) {
        let values = {}
        inputData.forEach((data) => {
          values[snakeCase(toLower(data.theme_name))] = data[key]
        })
        return {key: key, label: key, values}
      }
    }).filter(Boolean)
  }

  render () {


    console.log('this.stateprofileRatingResponse', this.props)
    const {profile: {profileRatingResponse}} = this.props
    if (profileRatingResponse.length < 0) {
      return null
    } else {
      const variables = map(profileRatingResponse, profile => {
        return {
          key: snakeCase(toLower(profile.theme_name)),
          label: toUpper(profile.theme_name),
        }
      })

      const parsedData = this.parseDataforRadar(this.state.keys,
        profileRatingResponse)
      const data = {
        variables: variables,
        sets: parsedData,
      }

      console.log('printing parsedData', parsedData)
      const colors = {
        myideal: '#FFFA67',
        myself: '#FFFFFF',
        allself_avg: '#CE1CD4',
        allideal_avg: '#0079FF',
        myteam: '#A7FBA9',
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

          {this.getMyRatingButtons()}

          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 10,
              marginHorizontal: 10,
            }}>
            <Radar
              width={Dimensions.get('window').width}
              height={400}
              padding={70}
              domainMax={10}
              highlighted={null}
              onHover={() => {}}
              data={data}
              colors={colors}
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
}

