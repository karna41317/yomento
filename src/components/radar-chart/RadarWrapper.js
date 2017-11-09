// @flow
import React, { Component } from 'react'
import type { TickScale, RadarPoint, RadarVariable } from './types'
import RadarAxis from './RadarAxis'
import RadarCircle from './RadarCircle'
import RadarRings from './RadarRings'
import Svg,{
  G,
  Rect,
} from 'react-native-svg';
type Props = {
  variables: Array<RadarVariable>,
  width: number,
  height: number,
  padding: number,
  domainMax: number,
  style?: {},
  onHover?: (point: RadarPoint | null) => void,
  highlighted: ?RadarPoint,
  scales: { [variableKey: string]: TickScale },
  backgroundScale: TickScale,
  offsetAngles: { [variableKey: string]: number },
  voronoiDiagram: any,
  radius: number,
  highlightedPoint: ?{ setKey: string, points: Array<RadarPoint> },
  regularPoints: Array<{ setKey: string, points: Array<RadarPoint> }>,
  colors: { [setKey: string]: string },
};

const defaultRadarStyle = {
  numRings: 4,
  axisColor: '#cdcdcd',
  ringColor: '#cdcdcd',
}

function getHovered (
  event: MouseEvent,
  height: number,
  width: number,
  padding: number,
  radius: number,
  voronoiDiagram: any,) {
  const innerHeight = height - padding * 2
  const innerWidth = width - padding * 2
  const diameter = radius * 2

  let {offsetX: clientX, offsetY: clientY} = event
  clientX -= padding
  clientY -= padding
  clientX -= (innerWidth - diameter) / 2
  clientY -= (innerHeight - diameter) / 2

  const site = voronoiDiagram.find(clientX, clientY, radius / 2)
  if (!site) {
    return null
  }

  const {data} = site
  return data
}

export default class RadarWrapper extends Component {
  props: Props
  render () {
    const {
      width,
      height,
      padding,
      radius,
      style,
      highlighted,
      scales,
      variables,
      offsetAngles,
      domainMax,
      highlightedPoint,
      regularPoints,
      backgroundScale,
      colors,
    } = this.props
    const diameter = radius * 2
    const {axisColor, ringColor, numRings} = {...defaultRadarStyle, ...style}

    const innerHeight = height - padding * 2
    const innerWidth = width - padding * 2

    const ticks = backgroundScale.ticks(numRings).slice(1)
    const tickFormat = backgroundScale.tickFormat(numRings)

    return (
      <Svg width={width} height={height}>
        <G
          transform={{translate: `${padding}, ${padding}`}}
          ref={c => {}}
        >
          <Rect
            width={diameter}
            height={diameter}
            fill={'transparent'}
            transform={{translate: `${(innerWidth - diameter) / 2}, ${(innerHeight - diameter) / 2}`
            }}
          />
          <G transform={{translate:`${innerWidth / 2}, ${innerHeight / 2}`}}>
            <RadarRings
              ticks={ticks}
              scale={backgroundScale}
              color={ringColor}
              format={tickFormat}
            />
            {variables.map(({key, label}) => {
              return (
                <RadarAxis
                  key={key}
                  scale={scales[key]}
                  offsetAngle={offsetAngles[key]}
                  label={label}
                  domainMax={domainMax}
                  color={axisColor}
                />
              )
            })}
            {regularPoints.map(({setKey, points}) => {
              return (
                <RadarCircle
                  key={setKey}
                  points={points}
                  scales={scales}
                  offsetAngles={offsetAngles}
                  color={colors[setKey]}
                  isSelected={false}
                  selectedVariableKey={null}
                />
              )
            })}
            {
              highlightedPoint
                ? <RadarCircle
                  key={highlightedPoint.setKey}
                  points={highlightedPoint.points}
                  scales={scales}
                  offsetAngles={offsetAngles}
                  color={colors[highlightedPoint.setKey]}
                  isSelected={true}
                  selectedVariableKey={
                    highlighted ? highlighted.variableKey : null
                  }
                />
                : null
            }
          </G>
        </G>
      </Svg>
    )
  }
}
