// @flow
import React from 'react';
import type {TickScale} from './types';
import Svg,{
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop
} from 'react-native-svg';
import { regularTextMixin } from '../../styles/mixins'
type RadarAxisProps = {
  scale: TickScale,
  offsetAngle: number,
  domainMax: number,
  label: string,
  color: string,
  style?: {},
};

const defaultRadarAxisStyle = {
  axisOverreach: 1.1,
  labelOverreach: 1.3,
  fontSize: 8,
  ...regularTextMixin(8, '#FFF'),
  textFill: '#FFF',
  axisWidth: 2,
};

export default function RadarAxis(props: RadarAxisProps) {
  const {scale, offsetAngle, domainMax, label, color, style} = props;
  const {
    axisOverreach,
    labelOverreach,
    fontSize,
    fontFamily,
    textFill,
    axisWidth,
  } = {...defaultRadarAxisStyle, style};
  const xFactor = Math.cos(offsetAngle - Math.PI / 2);
  const yFactor = Math.sin(offsetAngle - Math.PI / 2);
  return (
    <G>
      <Line
        x1={0}
        y1={0}
        x2={scale(domainMax * axisOverreach) * xFactor}
        y2={scale(domainMax * axisOverreach) * yFactor}
        stroke={color}
        strokeWidth={axisWidth}
      />
      <Text
        x={scale(domainMax * labelOverreach) * xFactor}
        y={scale(domainMax * labelOverreach) * yFactor}
        fontSize={fontSize}
        fontFamily={'Tablet-gothic'}
        fill={'#FFF'}
        textAnchor={'middle'}
        dy={'0.1em'}
      >
        {label}
      </Text>
    </G>
  );
}
