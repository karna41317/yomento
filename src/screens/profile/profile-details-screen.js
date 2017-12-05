/**
 * Created by Karan on 2017-11-17.
 */
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import { styles } from './profile.styles'
import { PrimaryButton, SecondaryButton } from '../../components/buttons/Button'

export default class ProfileDetailsScreen extends Component {

  closePress = () => {
    this.props.navigation.goBack()
  }

  goToLeadership = () => {
    this.props.navigation.navigate('readMore')
  }

  render () {

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
          <View style={styles.avatarCircle}/>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 15,
          }}>
            <Text style={styles.profileName}>Rok Pregelj</Text>
            <Text style={styles.profileEmail}>rok@wearesito.com</Text>
          </View>
          <PrimaryButton
            textStyles={styles.profileButtonText}
            style={{backgroundColor: '#0079FF', width: 250}}>
            Get Yommento
            PRO!</PrimaryButton>
          <SecondaryButton
            onPress={this.goToLeadership}
            style={[
              styles.profileSecondaryButtons,
              styles.profileDetailsButtons]}
            textStyles={styles.profileButtonText}>
            Leadership Approach
          </SecondaryButton>
          <SecondaryButton
            style={[
              styles.profileSecondaryButtons,
              styles.profileDetailsButtons]}
            textStyles={styles.profileButtonText}>
            FAQ
          </SecondaryButton>
          <SecondaryButton
            style={[
              styles.profileSecondaryButtons,
              styles.profileDetailsButtons]}
            textStyles={styles.profileButtonText}>
            Send Feedback
          </SecondaryButton>
          <SecondaryButton
            style={[
              styles.profileSecondaryButtons,
              styles.profileDetailsButtons,
              {borderColor: '#FF0000'}]}
            textStyles={styles.profileButtonText}>
            Sign out
          </SecondaryButton>
          <SecondaryButton
            style={[styles.profileSecondaryButtons, {borderWidth: 0}]}
            textStyles={styles.profileDetailsText}>
            Terms and confitions</SecondaryButton>
          <SecondaryButton
            style={[styles.profileSecondaryButtons, {borderWidth: 0}]}
            textStyles={styles.profileDetailsText}>
            Privacy policy</SecondaryButton>
        </View>
      </GradientWrapper>
    )
  }
}

