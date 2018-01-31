import React, { Component } from 'react';
import { ScrollView,Text } from 'react-native';
import Slides from './Slides'

const DATA = [
    {'text':'Explore the letest news from your mobile device','image': require('../images/newspaper.png')},
    {'text':'Get News Feed of various domains at one place','image': require('../images/info.png')},
    {'text':'Get going with the React Native Flat App Theme','image': require('../images/speaker.png')},

]

export default class Welcome extends Component{
    render(){
        return(
            <Slides data={DATA}/>
        )
    }
}