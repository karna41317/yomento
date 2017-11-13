/**
 * Created by Karan on 2017-11-13.
 */
import React, { Component } from 'react'

import Svg,{
  G,
  Path,
} from 'react-native-svg';

export default class MonoLogo extends Component {
  render () {
    const {width, height, color} = this.props
    return (
      <Svg width='200' height='200' viewBox='0 0 200 200'>
        <G stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <G fill={color}>
            <Path d='M155.988727,53.7692858 C155.033861,59.969931 149.623538,68.0763111 141.145378,76.011035 C133.830579,82.8545155 124.949448,88.8292049 116.169937,92.9174269 C114.911966,90.3495891 113.568146,87.7694901 112.04912,85.17713 C111.406119,84.0788801 110.712308,83.003401 110.025505,81.9226671 C118.85057,61.4570348 130.850345,48.8350436 141.103329,44.9412486 C145.931973,43.1090806 150.115863,43.349049 153.122377,45.6436381 C155.568236,47.5090864 156.531862,50.2433257 155.988727,53.7692858 M121.878108,124.076545 C123.249962,134.850604 122.027032,144.377527 118.526441,150.217344 C116.178697,154.133909 113.025011,156.164008 109.151233,156.255091 L108.90069,156.258594 C106.531922,156.258594 104.63095,155.438847 103.085643,153.752062 C95.4607313,145.428484 99.4536483,120.53482 99.4956975,120.275584 C100.529406,113.190384 101.92754,106.574611 103.600746,100.42301 C106.843786,100.212819 109.890597,99.5734867 112.679857,98.5032623 C113.200216,98.3035806 113.72583,98.0636121 114.24794,97.8499175 C118.167271,106.59563 120.788335,115.497234 121.878108,124.076545 M108.68694,87.018056 C110.12362,89.4667854 111.427143,91.9522982 112.651825,94.4500723 C112.18578,94.6392445 111.716231,94.8546906 111.251938,95.0333533 C109.224819,95.8110613 107.031255,96.3172722 104.704536,96.5712534 C105.790805,92.9612168 106.973438,89.5298428 108.236664,86.2736283 C108.385588,86.5223547 108.539768,86.7658264 108.68694,87.018056 M83.9112321,93.1468858 C74.6621717,89.5438556 64.9768514,83.2924141 57.3361708,75.9952707 C46.8519167,65.9831555 41.9339185,56.0008174 44.5006685,49.9455546 L44.5024206,49.9420514 C45.9688846,46.4826519 48.8737799,44.5996876 53.1330081,44.3439548 C66.2908872,43.5592404 89.7788403,58.0624444 105.715467,82.2449605 C103.812743,86.8499029 102.104497,91.689559 100.629272,96.7569224 C95.5010284,96.6675911 89.8524263,95.462494 83.9112321,93.1468858 M155.93091,43.0722971 L155.953686,43.0442716 L155.517426,42.7114686 L155.119712,42.4084427 L155.105695,42.424207 C152.829785,40.8214979 150.140392,40 147.093581,40 C144.744084,40 142.252672,40.4939497 139.689426,41.4678363 C130.708429,44.8764396 121.531203,53.6291582 113.850225,66.1110219 C111.551539,69.848925 109.438569,73.8775927 107.499052,78.1339678 C100.576711,68.1779036 91.9601398,59.1957261 82.6199729,52.3697616 C71.816846,44.477076 60.8910759,40.1348728 52.8929776,40.6165613 C47.302193,40.9528675 43.2672269,43.5399729 41.1542572,48.0748515 L41.1227203,48.0608387 L40.926491,48.5267629 C40.926491,48.5267629 40.926491,48.5285145 40.9247389,48.5285145 L40.7144932,49.027719 L40.7477821,49.0417317 C37.9532658,56.6278883 43.0815098,67.6331577 54.6187447,78.6506882 C62.727222,86.3944883 72.6175319,92.7720445 82.4657927,96.6097885 C88.4893331,98.958677 94.239554,100.242596 99.5973162,100.461545 C97.9644077,106.618401 96.6468677,113.057263 95.6744812,119.718577 C95.4940203,120.809821 91.3311546,146.551256 100.19126,156.225313 C102.43213,158.674043 105.291472,159.931688 108.688692,159.982484 L108.688692,160 L109.212555,159.98949 C109.221315,159.98949 109.231827,159.987739 109.242339,159.987739 L109.738169,159.978981 L109.736417,159.945701 C114.750778,159.665445 118.943428,156.974996 121.8711,152.089798 C128.260819,141.429593 128.351925,119.835934 117.781821,96.3102658 C126.952039,92.0468844 136.216868,85.8199653 143.83302,78.6927265 C152.908627,70.1992439 158.734186,61.3151557 159.811696,54.3192865 C160.531787,49.6460319 159.175702,45.7785109 155.93091,43.0722971' />
          </G>
        </G>
      </Svg>
    )
  }
}

