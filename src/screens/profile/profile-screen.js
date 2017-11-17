import React, { Component } from 'react'
import { View, Text } from 'react-native'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import { styles } from './profile.styles'
import { PrimaryButton, SecondaryButton } from '../../components/buttons/Button'
import Radar from 'src/components/radar_chart/Radar';

export default class ProfileScreen extends Component {

  render () {

    const data = {
      variables: [
        {key: 'resilience', label: 'Resilience'},
        {key: 'strength', label: 'Strength'},
        {key: 'adaptability', label: 'Adaptability'},
        {key: 'creativity', label: 'Creativity'},
        {key: 'openness', label: 'Open to Change'},
        {key: 'confidence', label: 'Confidence'},
      ],
      sets: [
        {
          key: 'me',
          label: 'My Scores',
          values: {
            resilience: 4,
            strength: 6,
            adaptability: 7,
            creativity: 2,
            openness: 8,
            confidence: 1,
          },
        },
        {
          key: 'everyone',
          label: 'Everyone',
          values: {
            resilience: 10,
            strength: 8,
            adaptability: 6,
            creativity: 4,
            openness: 2,
            confidence: 0,
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
          <Button transparent onPress={this.props.closePress}>
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
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Radar
            width={400}
            height={400}
            padding={70}
            domainMax={10}
            highlighted={null}
            onHover={() =>{}}
            data={data}
          />


        </View>
        <View style={[styles.headerStyle, {marginHorizontal: 10, marginBottom:30}]}>
          <PrimaryButton
            textStyles={styles.profileButtonText}
            style={{backgroundColor: '#CE1CD4'}}>All user's
            self-rate</PrimaryButton>
          <PrimaryButton
            textStyles={styles.profileButtonText}
            style={{backgroundColor: '#0079FF'}}>All user's
            Ideal</PrimaryButton>
        </View>
      </GradientWrapper>
    )
  }
}

