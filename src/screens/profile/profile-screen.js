import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Radar from 'src/components/radar-chart/Radar'
import GradientWrapper from '../../components/partials/gradientWrapper'
import NativeRadarComponent from 'src/components/native-radar-chart/radar-charts'

const data = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40],
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 48, 40, 19, 96, 27, 100],
    },
  ],
}

export default class ProfileScreen extends Component {
  getRadarComponent = () => {
    return (
      <View>
        <View>
          <Radar
            width={350}
            height={350}
            padding={70}
            domainMax={10}
            highlighted={null}
            onHover={(point) => {
              if (point) {
                console.log('hovered over a data point')
              } else {
                console.log('not over anything')
              }
            }}
            data={{
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
            }}
          />
        </View>
      </View>
    )
  }

  render () {
    return (
      <GradientWrapper name={'defaulta'}>
        <NativeRadarComponent/>
      </GradientWrapper>
    )
  }
}

