import {Component} from 'react-native'
import Radar from 'src/components/radar_chart/Radar';
import {View} from 'react-native'
export default class RadarChart extends Component {
  render () {
    return (
      <View>
      <Radar
        width={400}
        height={400}
        padding={70}
        domainMax={10}
        highlighted={null}
        onHover={() =>{}}
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
      /></View>
    )
  }
}
