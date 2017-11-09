// @flow
import React from 'react'
import _ from 'lodash'
import type { TickScale } from './types'
import Svg,{
  Circle,
  G,
  Text,
} from 'react-native-svg';

type RadarRingsProps = {
  ticks: Array<number>,
  scale: TickScale,
  color: string,
  format(number): string,
  style?: {},
};

const defaultRadarRingsStyle = {
  fontFamily: 'sans-serif',
  fontSize: 10,
  ringOpacity: 0.1,
  textFill: 'black',
}

export default function RadarRings (props: RadarRingsProps) {
  const {ticks, scale, color, format, style} = props
  const {fontFamily, fontSize, ringOpacity, textFill} = {
    ...defaultRadarRingsStyle,
    ...style,
  }
  const outerFirst = _.reverse(ticks)
  return (
    <G>
      {outerFirst.map(tickValue => {
        return (
          <Circle
            key={`${tickValue}`}
            fillOpacity={ringOpacity}
            fill={color}
            stroke={color}
            r={scale(tickValue)}
          />
        )
      })}
      {outerFirst.map(tickValue => {
        return (
          <Text
            key={`${tickValue}-tick`}
            x={0}
            y={-scale(tickValue)}
            dx={'0.4em'}
            dy={'0.4em'}
            fontFamily={fontFamily}
            fontSize={fontSize}
            textAnchor={'start'}
            fill={textFill}
          >
            {format(tickValue)}
          </Text>
        )
      })}
    </G>
  )
}
