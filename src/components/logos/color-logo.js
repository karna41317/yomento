/**
 * Created by Karan on 2017-11-13.
 */
import React, { Component } from 'react'
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
export default class ColorLogo extends Component {
  render () {
    const {width, height} = this.props
    return (
      <Svg x='0px' y='0px'
           viewBox='0 0 340.2 170.1'
           enable-background='new 0 0 340.2 170.1'>
        <Rect fill='#141419' width='340.2' height='170.1'/>
        <G>
          <Path fill='#FFFFFF'
                d='M173.3,113.6h-3.8v-10.8l-9.4-17.8h4.3l6.9,14l7.3-14h4l-9.4,17.6V113.6z'/>
          <Path fill='#FFFFFF' d='M190.8,114c-3.1,0-5.3-0.9-6.8-2.7c-1.5-1.8-2.2-4.4-2.2-7.8c0-1.7,0.2-3.2,0.7-4.5c0.5-1.3,1.2-2.4,2-3.3
		c0.9-0.9,1.9-1.5,3-2c1.1-0.4,2.4-0.7,3.7-0.7c2.8,0,4.9,0.9,6.5,2.6c1.5,1.7,2.3,4.2,2.3,7.5c0,3.6-0.8,6.3-2.4,8.1
		C196,113.1,193.7,114,190.8,114z M190.9,111.3c1,0,1.8-0.2,2.5-0.6c0.7-0.4,1.3-1,1.7-1.7c0.4-0.7,0.7-1.5,0.9-2.5
		c0.2-1,0.3-2,0.3-3.1c0-1.1-0.1-2.1-0.3-3c-0.2-0.9-0.5-1.7-0.9-2.4c-0.4-0.7-1-1.2-1.6-1.5c-0.7-0.4-1.5-0.5-2.4-0.5
		c-1,0-1.8,0.2-2.5,0.6c-0.7,0.4-1.3,0.9-1.7,1.6c-0.5,0.7-0.8,1.5-1,2.4c-0.2,0.9-0.3,1.9-0.3,3c0,1.1,0.1,2.2,0.3,3.1
		c0.2,0.9,0.5,1.8,0.9,2.5c0.4,0.7,1,1.2,1.7,1.6C189,111.1,189.9,111.3,190.9,111.3z'/>
          <Path fill='#FFFFFF' d='M214,93.1c0.9,0,1.7,0.1,2.4,0.3c0.7,0.2,1.2,0.5,1.7,0.9c0.5,0.4,0.9,0.8,1.2,1.3c0.3,0.5,0.5,1,0.7,1.5
		c0.7-1.4,1.6-2.4,2.6-3c1-0.7,2.3-1,3.9-1c1,0,1.9,0.2,2.8,0.5c0.8,0.3,1.5,0.8,2.1,1.5s1,1.6,1.3,2.7c0.3,1.1,0.5,2.4,0.5,4v11.9
		h-3.7v-11.7c0-1.2-0.1-2.1-0.3-2.9c-0.2-0.8-0.5-1.4-0.8-1.8c-0.4-0.5-0.8-0.8-1.3-0.9c-0.5-0.2-1-0.3-1.6-0.3
		c-1.4,0-2.6,0.5-3.5,1.5c-0.9,1-1.3,2.6-1.3,4.8v11.3h-3.6v-11.7c0-1.2-0.1-2.1-0.3-2.9c-0.2-0.8-0.4-1.4-0.8-1.8
		c-0.3-0.5-0.8-0.8-1.2-0.9c-0.5-0.2-1-0.3-1.6-0.3c-1.5,0-2.7,0.5-3.5,1.6s-1.3,2.6-1.3,4.7v11.3h-3.7v-20h3.4l0.2,3h0
		c0.2-0.4,0.5-0.8,0.8-1.2c0.3-0.4,0.7-0.8,1.2-1.1c0.5-0.3,1-0.6,1.6-0.8C212.5,93.2,213.2,93.1,214,93.1z'/>
          <Path fill='#FFFFFF' d='M254.6,107.2c-0.2,1.4-0.6,2.5-1.1,3.4c-0.6,0.9-1.2,1.6-1.9,2.1c-0.7,0.5-1.5,0.9-2.4,1
		c-0.9,0.2-1.7,0.3-2.5,0.3c-1.7,0-3.1-0.3-4.2-0.8c-1.1-0.5-2.1-1.2-2.8-2.1c-0.7-0.9-1.2-2-1.5-3.3c-0.3-1.3-0.5-2.6-0.5-4.1
		c0-1.6,0.2-3.1,0.6-4.4s1-2.4,1.8-3.4s1.8-1.6,2.9-2.1c1.2-0.5,2.5-0.8,4-0.8c2.8,0,4.9,1,6.2,2.9c1.3,1.9,1.8,4.7,1.4,8.2h-13.2
		c0,1,0.1,1.9,0.3,2.7c0.2,0.8,0.5,1.6,0.9,2.2c0.4,0.6,0.9,1.1,1.6,1.5c0.7,0.4,1.5,0.5,2.6,0.5c1.3,0,2.4-0.3,3.2-1
		c0.9-0.7,1.4-1.8,1.6-3.3L254.6,107.2z M251.3,101.8c0.1-1.8-0.2-3.3-1-4.4c-0.7-1.1-2-1.7-3.7-1.7c-0.9,0-1.7,0.2-2.3,0.5
		s-1.2,0.8-1.6,1.3c-0.4,0.6-0.8,1.2-1,1.9c-0.2,0.7-0.3,1.5-0.4,2.3H251.3z'/>
          <Path fill='#FFFFFF' d='M276.3,113.6h-3.6v-11.7c0-2.1-0.3-3.7-1-4.6c-0.7-0.9-1.8-1.4-3.2-1.4c-1,0-1.9,0.2-2.6,0.5
		c-0.7,0.4-1.2,0.8-1.6,1.4c-0.4,0.6-0.7,1.3-0.8,2c-0.2,0.8-0.2,1.5-0.2,2.3v11.3h-3.7v-20h3.4l0.2,3h0c0.2-0.4,0.5-0.8,0.8-1.2
		c0.3-0.4,0.8-0.8,1.2-1.1c0.5-0.3,1.1-0.6,1.8-0.8c0.7-0.2,1.5-0.3,2.3-0.3c2.2,0,3.9,0.7,5.2,2c1.2,1.3,1.8,3.5,1.8,6.4V113.6z'/>
          <Path fill='#FFFFFF' d='M279.9,93.6h2.4v-4.3l3.6-1.1v5.5h4.8v2.7h-4.8V107c0,1.5,0.2,2.5,0.6,3.2c0.4,0.7,1.1,1,2.3,1
		c0.5,0,0.9,0,1.3-0.1c0.4-0.1,0.8-0.2,1.2-0.3l0.4,2.6c-0.4,0.1-0.9,0.3-1.5,0.4c-0.6,0.1-1.3,0.2-2.1,0.2c-1.1,0-2-0.1-2.7-0.4
		c-0.7-0.3-1.3-0.7-1.7-1.3c-0.4-0.6-0.7-1.3-0.9-2.1c-0.2-0.8-0.3-1.7-0.3-2.8V96.3h-2.4V93.6z'/>
          <Path fill='#FFFFFF' d='M302.6,114c-3.1,0-5.3-0.9-6.8-2.7c-1.5-1.8-2.2-4.4-2.2-7.8c0-1.7,0.2-3.2,0.7-4.5c0.5-1.3,1.2-2.4,2-3.3
		c0.9-0.9,1.9-1.5,3-2c1.1-0.4,2.4-0.7,3.7-0.7c2.8,0,4.9,0.9,6.5,2.6c1.5,1.7,2.3,4.2,2.3,7.5c0,3.6-0.8,6.3-2.4,8.1
		C307.8,113.1,305.5,114,302.6,114z M302.8,111.3c1,0,1.8-0.2,2.5-0.6c0.7-0.4,1.3-1,1.7-1.7s0.7-1.5,0.9-2.5c0.2-1,0.3-2,0.3-3.1
		c0-1.1-0.1-2.1-0.3-3c-0.2-0.9-0.5-1.7-0.9-2.4s-1-1.2-1.6-1.5c-0.7-0.4-1.5-0.5-2.4-0.5c-1,0-1.8,0.2-2.5,0.6
		c-0.7,0.4-1.3,0.9-1.7,1.6c-0.5,0.7-0.8,1.5-1,2.4c-0.2,0.9-0.3,1.9-0.3,3c0,1.1,0.1,2.2,0.3,3.1c0.2,0.9,0.5,1.8,0.9,2.5
		c0.4,0.7,1,1.2,1.7,1.6C300.9,111.1,301.8,111.3,302.8,111.3z'/>
        </G>
        <G>
          <G>
            <LinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse'
                            x1='142.2318' y1='57.8338' x2='27.8511'
                            y2='57.8338'>
              <Stop offset='0' style='stop-color:#31FAA9'/>
              <Stop offset='1' style='stop-color:#F9EE3E'/>
            </LinearGradient>
            <Path fill='url(#SVGID_1_)' d='M138,30.4l-0.4-0.3l-2.3,2.8l0.4,0.3c2.3,1.8,3.2,4.4,2.7,7.7c-0.9,5.9-6.1,13.6-14.1,21.2
			c-8.3,7.7-18.7,14.4-28.5,18.1c-7,2.7-16.1,2.1-26.1-1.8c-8.8-3.4-18-9.4-25.3-16.4c-10-9.5-14.7-19.1-12.2-24.8l0.2-0.5l-3.4-1.3
			L28.8,36c-3.1,7.2,1.8,18,13.1,28.7c7.7,7.4,17.2,13.5,26.5,17.1c6.3,2.5,12.3,3.7,17.9,3.7c3.9,0,7.6-0.6,10.9-1.9
			c10.3-3.9,21.1-10.8,29.7-18.9c8.6-8.1,14.2-16.6,15.2-23.2C142.8,36.8,141.4,33,138,30.4z'/>
            <LinearGradient id='SVGID_2_' gradientUnits='userSpaceOnUse'
                            x1='101.2842' y1='32.6354' x2='119.8138'
                            y2='137.7225'>
              <Stop offset='0' style='stop-color:#31FAA9'/>
              <Stop offset='1' style='stop-color:#FF53A9'/>
            </LinearGradient>
            <Path fill='url(#SVGID_2_)' d='M138,30.4c-2.2-1.7-4.9-2.6-8-2.6c-2.2,0-4.6,0.5-7.1,1.4c-8.6,3.3-17.3,11.6-24.6,23.5
			c-8.5,13.8-14.5,31.4-17.3,51.1c-0.2,1-4.1,25.6,4.3,34.8c2.2,2.4,5,3.6,8.3,3.6l0.8,0l-0.1-3.6l-0.7,0c-2.3,0-4.1-0.8-5.5-2.4
			c-7.3-7.9-3.5-31.7-3.4-31.9c6-41.3,24.8-66.2,39.7-71.8c4.6-1.7,8.6-1.5,11.5,0.7l0.4,0.3l2.3-2.8L138,30.4z'/>
            <LinearGradient id='SVGID_3_' gradientUnits='userSpaceOnUse'
                            x1='45.1833' y1='23.614' x2='109.5509' y2='135.102'>
              <Stop offset='0' style='stop-color:#FFFB41'/>
              <Stop offset='1' style='stop-color:#FF53A9'/>
            </LinearGradient>
            <Path fill='url(#SVGID_3_)' d='M96.5,70.9c-7.1-12.2-17.1-23.3-28-31.3C58.2,32.1,47.8,28,40.2,28.4c-5.5,0.3-9.5,2.9-11.4,7.5
			l-0.2,0.5l3.4,1.3l0.2-0.4c1.4-3.3,4.2-5.1,8.2-5.3c13.4-0.8,37.8,14.9,52.9,40.7c6.8,11.5,11.1,23.7,12.6,35.3
			c1.3,10.3,0.1,19.4-3.2,24.9c-2.2,3.7-5.3,5.7-9,5.8l-0.5,0l0.1,3.6l0.5,0c5-0.1,9.2-2.7,12.1-7.5C112.9,122.9,112,97.3,96.5,70.9
			z'/>
          </G>
          <LinearGradient id='SVGID_4_' gradientUnits='userSpaceOnUse'
                          x1='89.9413' y1='72.4351' x2='92.398' y2='70.3737'>
            <Stop offset='0.2676' style='stop-color:#231F20;stop-opacity:0'/>
            <Stop offset='1' style='stop-color:#231F20'/>
          </LinearGradient>
          <Polygon opacity='0.3' fill='url(#SVGID_4_)'
                   points='90.5,68.1 92.9,71.9 91.9,74.7 89.2,71.2 	'/>
          <LinearGradient id='SVGID_5_' gradientUnits='userSpaceOnUse'
                          x1='96.029' y1='62.6033' x2='92.656' y2='65.4336'>
            <Stop offset='0.2386' style='stop-color:#231F20;stop-opacity:0'/>
            <Stop offset='1' style='stop-color:#231F20'/>
          </LinearGradient>
          <Polygon opacity='0.3' fill='url(#SVGID_5_)'
                   points='94.6,67.8 92.2,64.1 94,60.3 96.6,63.3 	'/>
          <LinearGradient id='SVGID_6_' gradientUnits='userSpaceOnUse'
                          x1='81.9189' y1='83.1621' x2='85.0892' y2='84.0116'>
            <Stop offset='0.2676' style='stop-color:#231F20;stop-opacity:0'/>
            <Stop offset='1' style='stop-color:#231F20'/>
          </LinearGradient>
          <Polygon opacity='0.3' fill='url(#SVGID_6_)'
                   points='84.7,85.5 85.6,82 82.8,81.8 81.4,85.2 	'/>
          <LinearGradient id='SVGID_7_' gradientUnits='userSpaceOnUse'
                          x1='91.1523' y1='83.6536' x2='88.6285' y2='83.4328'>
            <Stop offset='0.2676' style='stop-color:#231F20;stop-opacity:0'/>
            <Stop offset='1' style='stop-color:#231F20'/>
          </LinearGradient>
          <Polygon opacity='0.3' fill='url(#SVGID_7_)'
                   points='89.5,81.8 88.4,85.6 90.6,85.2 91.3,81.5 	'/>
          <LinearGradient id='SVGID_8_' gradientUnits='userSpaceOnUse'
                          x1='103.8884' y1='78.1499' x2='101.1255' y2='80.4682'>
            <Stop offset='0.3101' style='stop-color:#231F20;stop-opacity:0'/>
            <Stop offset='1' style='stop-color:#231F20'/>
          </LinearGradient>
          <Polygon opacity='0.3' fill='url(#SVGID_8_)'
                   points='100.5,78.3 102,81.5 104.5,80.3 103,77.1 	'/>
          <LinearGradient id='SVGID_9_' gradientUnits='userSpaceOnUse'
                          x1='95.5822' y1='82.3663' x2='97.8674' y2='81.3006'>
            <Stop offset='0.2676' style='stop-color:#231F20;stop-opacity:0'/>
            <Stop offset='1' style='stop-color:#231F20'/>
          </LinearGradient>
          <Polygon opacity='0.3' fill='url(#SVGID_9_)'
                   points='97.1,79.8 98.7,83 96.3,83.9 94.8,80.7 	'/>
        </G>
      </Svg>

    )
  }
}
