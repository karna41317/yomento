/**
 * Created by Karan on 2017-11-25.
 */
import React, { Component } from 'react'
import Svg, {
  G, Polyline, Rect, Path,
} from 'react-native-svg'

export const PadIcon = () => (
  <Svg width='50px' height='64px' viewBox='0 0 50 64'>
    <G stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <G id='group1' transform={{translate: '-11.000000, -4.000000'}}>
        <Rect x='0' y='0' width='72' height='72'></Rect>
        <Polyline stroke='#12124B' strokeWidth='4' strokeLinecap='round'
                  strokeLinejoin='round'
                  points='25.5 40.9701292 31.9927482 50.0943719 46.2917647 30'></Polyline>
        <G id='group2' transform='translate(13.500000, 6.000000)'
           stroke='#12124B' strokeWidth='4' strokeLinecap='round'
           strokeLinejoin='round'>
          <Path
            d='M39.6511043,60 L5.34889573,60 C2.40733614,60 0,57.5527187 0,54.5623495 L0,11.4376505 C0,8.44592697 2.40733614,6 5.34889573,6 L39.6511043,6 C42.5926639,6 45,8.44592697 45,11.4376505 L45,54.5623495 C45,57.5527187 42.5926639,60 39.6511043,60 Z'></Path>
          <Path
            d='M33,12 L12,12 L12,6.67765999 C12,2.99018453 14.4562385,0 17.4881377,0 L27.5118623,0 C30.5424708,0 33,2.99018453 33,6.67765999 L33,12 Z'
            id='Stroke-3'></Path>
        </G>
      </G>
    </G>
  </Svg>
)
