import React from 'react'
import {View,Dimensions,Image,Text} from 'react-native'
import {DrawerItems} from 'react-navigation'
import Home from '../Home/Home'
import Feedback from '../Feedback'

import OverView from '../Overview'
import Settings from '../Settings'
import Profile from '../Profile'
import ChannelGrid from '../Channels/ChannelGrid'
import Calender from '../Calender/Calender'
import Widget from '../Widgets/Widgets'
import Comments from '../Comments'
import Timeline from '../Timeline'
import Hr from 'react-native-hr'
import font from '../Helpers/fontsize'

const WIDTH = Dimensions.get('window').width


const items = [Home, ChannelGrid, OverView, Profile, Calender, Timeline, Widget, Feedback, Settings]

const DrawerContent = (props) => (
    <View style={styles.container}>
        <DrawerItems activeTintColor='#2196f3'
                     activeBackgroundColor='#01a381'
                     inactiveTintColor='rgba(0, 0, 0, .87)'
                     inactiveBackgroundColor='transparent'
                     labelStyle={{color: '#ffffff'}}
                     items={items} {...props}  />
        <Hr lineColor="#01a381" marginLeft={10} />
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',padding:10,paddingTop:20}}>
            <View style={{marginLeft:10}}>
                <Text style={[styles.textStyle,{fontWeight:'bold'}]}>LOGOUT</Text>
                <Text style={styles.textStyle}>Akshay Kumar</Text>
            </View>

            <View>
                <Image
                    style={{width:WIDTH*0.15,height:WIDTH*0.15,borderRadius:WIDTH*0.15/2 }}
                    source={require('../images/tech.jpg')}
                />
            </View>
        </View>
    </View>
)

const styles = {
    container: {
        flex: 1,
        backgroundColor:'rgb(70, 216, 188)'
        //justifyContent:'center',
    },
    textStyle:{
        color:'#fff',

    }
}

export default DrawerContent