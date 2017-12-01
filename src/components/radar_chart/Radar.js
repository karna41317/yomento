// @flow
import React from 'react'
import { schemeCategory10 } from 'd3-scale'
import { voronoi } from 'd3-voronoi'
import _ from 'lodash'
import { View } from 'react-native'
import {
  flatMapDeepArray,
  forEachArray,
  radarPoints,
  radiusScales,
} from './utils'
import type { RadarPoint, RadarData } from './types'
import RadarWrapper from './RadarWrapper'

type Props = {
  data: RadarData,
  width: number,
  height: number,
  padding: number,
  domainMax: number,
  style?: {},
  onHover?: (point: RadarPoint | null) => void,
  highlighted: ?RadarPoint,
};

function convertData (props) {
  const {data, width, height, padding, domainMax} = props
  const innerHeight = height - padding * 2
  const innerWidth = width - padding * 2

  const radius = Math.min(innerWidth / 2, innerHeight / 2)
  const scales = radiusScales(data.variables, domainMax, radius)

  const angleSliceRadians = Math.PI * 2 / data.variables.length
  const offsetAngles = {}
  forEachArray(data.variables, ({key}, i) => {
    offsetAngles[key] = angleSliceRadians * i
  })

  const allPoints = radarPoints(data, scales, offsetAngles)
  const flatPointList = flatMapDeepArray(allPoints, ({points}) => {
    return points
  })

  const voronoiDiagram = voronoi().
    x((d: RadarPoint) => d.x + radius).
    y((d: RadarPoint) => d.y + radius).
    size([radius * 2, radius * 2])(flatPointList)

  return {allPoints, scales, offsetAngles, voronoiDiagram, radius}
}

export default function Radar (props: Props) {
  const {
    data,
    width,
    height,
    padding,
    domainMax,
    style,
    onHover,
    highlighted,
    colors
  } = props
  const {allPoints, scales, offsetAngles, radius, voronoiDiagram} = convertData(
    props,
  )

  const highlightedSetKey = highlighted ? highlighted.setKey : null

  const backgroundScale = scales[data.variables[0].key]

  const colors_idx = {}
  forEachArray(allPoints, ({setKey}, idx) => {
    console.log('printing', schemeCategory10[idx])

    colors_idx[setKey] = schemeCategory10[idx]
    console.log('printing colors', colors_idx)

  })

  const [highlightedPoints, regularPoints] = _.partition(
    allPoints,
    ({setKey}) => setKey === highlightedSetKey,
  )
  console.log('printing colors', colors)
  return (
    <View>
      <RadarWrapper
        variables={data.variables}
        width={width}
        height={height}
        padding={padding}
        domainMax={domainMax}
        style={style}
        onHover={onHover}
        highlighted={highlighted}
        scales={scales}
        backgroundScale={backgroundScale}
        offsetAngles={offsetAngles}
        voronoiDiagram={voronoiDiagram}
        radius={radius}
        highlightedPoint={
          highlightedPoints.length > 0 ? highlightedPoints[0] : null
        }
        regularPoints={regularPoints}
        colors={colors}
      />
    </View>
  )
}
