import React, { Component } from 'react'
import {View, Text} from 'react-native'
import Radar from 'src/components/radar-chart/Radar'
import GradientWrapper from '../../components/partials/gradientWrapper'

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
      <GradientWrapper name={'default'}>
        {this.getRadarComponent()}
      </GradientWrapper>
    )
  }
}

