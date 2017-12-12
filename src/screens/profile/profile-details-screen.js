/**
 * Created by Karan on 2017-11-17.
 */
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { View, Text, StyleSheet, Linking, Image, ActivityIndicator } from 'react-native'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'src/components/native-base'
import { styles } from './profile.styles'
import { PrimaryButton, SecondaryButton } from '../../components/buttons/Button'
import { profileSelector } from './profile.selector'
import { get, toLower } from 'lodash'
import {logOut} from 'src/actions'

@connect(profileSelector)
export default class ProfileDetailsScreen extends Component {

  closePress = () => {
    this.props.navigation.goBack()
  }

  goToLeadership = () => {
    this.props.navigation.navigate('readMore')
  }

  openUrl = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url)
        Alert.alert(
          'Error',
          `Can not open ${url}`,
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
          ],
          {cancelable: false},
        )
      } else {
        return Linking.openURL(url)
      }
    }).catch(err => console.error('An error occurred', err))
  }
  logOutUser = () => {
    this.props.dispatch(logOut())
    this.props.navigation.navigate('home')
  }

  render () {

    const {auth} = this.props
    const memberShipDetails = get(auth, 'userData.membership_details')

    let userType
    if (memberShipDetails) {
      userType = memberShipDetails[0].type
    }

    const userDetails = get(auth, 'userData.user')
    const proButtonText = toLower(userType) === 'basic'
      ? 'Get YommentoPRO!'
      : 'PRO member'
    proButtonStyle = {
      backgroundColor: toLower(userType) === 'basic' ? '#0079FF' : '#C1C1C1',
      borderColor: toLower(userType) === 'basic' ? '#0079FF' : '#C1C1C1',
      width: 250,
    }
    if(userDetails && memberShipDetails) {
      return (
        <GradientWrapper name={'default'}>
          <View backgroundColor={'transparent'} style={styles.headerStyle}>
            <Button transparent>
            </Button>
            <Text style={styles.headerTextStyle}>Settings</Text>
            <Button transparent onPress={this.closePress}>
              <Icon name='close' style={{fontSize: 40, color: '#419BF9'}}/>
            </Button>
          </View>
          <View style={styles.profileDetails}>
            <View style={styles.avatarCircle}>
              <Icon name='ios-person-outline' style={styles.avatarIcon}/>
            </View>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 15,
            }}>
              <Text style={styles.profileName}>{userDetails.first_name}</Text>
              <Text style={styles.profileEmail}>{userDetails.email}</Text>
            </View>
            <PrimaryButton
              textStyles={styles.profileButtonText}
              style={proButtonStyle}>
              {proButtonText}
            </PrimaryButton>
            <SecondaryButton
              onPress={this.goToLeadership}
              style={[
                styles.profileSecondaryButtons,
                styles.profileDetailsButtons]}
              textStyles={styles.profileButtonText}>
              Leadership Approach
            </SecondaryButton>
            <SecondaryButton
              onPress = {this.openUrl.bind(this, 'http://www.yomento.com/faq')}
              style={[
                styles.profileSecondaryButtons,
                styles.profileDetailsButtons]}
              textStyles={styles.profileButtonText}>
              FAQ
            </SecondaryButton>
            <SecondaryButton
              onPress = {this.openUrl.bind(this, 'mailto:hello@yomento.com')}
              style={[
                styles.profileSecondaryButtons,
                styles.profileDetailsButtons]}
              textStyles={styles.profileButtonText}>
              Send Feedback
            </SecondaryButton>
            <SecondaryButton
              onPress={this.logOutUser}
              style={[
                styles.profileSecondaryButtons,
                styles.profileDetailsButtons,
                {borderColor: '#FF0000'}]}
              textStyles={styles.profileButtonText}>
              Sign out
            </SecondaryButton>
            <SecondaryButton
              onPress = {this.openUrl.bind(this, 'http://www.yomento.com/toc')}
              style={[styles.profileSecondaryButtons, {borderWidth: 0}]}
              textStyles={styles.profileDetailsText}>
              Terms and confitions</SecondaryButton>
            <SecondaryButton
              onPress = {this.openUrl.bind(this, 'http://www.yomento.com/privacy-policy')}
              style={[styles.profileSecondaryButtons, {borderWidth: 0}]}
              textStyles={styles.profileDetailsText}>
              Privacy policy</SecondaryButton>
          </View>
        </GradientWrapper>
      )
    }

    return <ActivityIndicator />
  }
}

