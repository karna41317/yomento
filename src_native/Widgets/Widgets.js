import React from 'react'
import {View,
    Image,
    Text,
    TouchableOpacity,
    Dimensions} from 'react-native'
import {StackNavigator} from 'react-navigation'
import {Button,Icon} from 'react-native-elements'
import styles from './Styles'



class Widgets extends React.Component{
    static navigationOptions = ({navigation}) =>{
        return{
            title: <Image
                source={require('../images/logo.png')}
                style={{height: 26,width: 26,tintColor: '#fff'}}
            />,
            drawerIcon:  <Icon name="widgets" color="white" />,
            headerLeft:
                <TouchableOpacity onPress={()=> navigation.navigate('NEWS')}>
                    <Image
                        source={require('../icon/leftArrow.png')}
                        style={{height: 25,width: 25,marginLeft:10,tintColor: '#fff'}}
                    />
                </TouchableOpacity>,
            headerRight:
                <TouchableOpacity>
                    <Icon name="add" color="white" size={30} style={{marginRight:10}} />
                </TouchableOpacity>,
            headerStyle: {
                backgroundColor: '#00c497'
            }
        }
    }
    render(){
        return(
            <View style={{flex:1}}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>WIDGETS</Text>
                </View>
                <View style={styles.widgetArea}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',margin:15}}>
                        <View>
                            <Image source={require('../icon/weather.png')} style={{width:50,height:50,tintColor:'#fff'}} />
                            <Text style={styles.p}>Mostly Cloudy</Text>
                            <Text style={styles.pSmall}>New York</Text>
                        </View>
                        <View>
                            <Text style={styles.temp}>76</Text>
                        </View>
                    </View>
                    <View style={{flex:1,justifyContent:'flex-end',padding:10}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
                            <View>
                                <Text style={styles.p}>65'</Text>
                                <Text style={styles.pSmall}>4 AM</Text>
                            </View>
                            <View>
                                <Text style={styles.p}>86'</Text>
                                <Text style={styles.pSmall}>12 PM</Text>
                            </View>
                            <View>
                                <Text style={styles.p}>79'</Text>
                                <Text style={styles.pSmall}>8 AM</Text>
                            </View>
                            <View>
                                <Text style={styles.p}>62'</Text>
                                <Text style={styles.pSmall}>6 AM</Text>
                            </View>
                            <View>
                                <Text style={styles.p}>59'</Text>
                                <Text style={styles.pSmall}>5 PM</Text>
                            </View>
                            <View>
                                <Text style={styles.p}>52'</Text>
                                <Text style={styles.pSmall}>5 AM</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.buttomView}>
                    <View>

                        <Text style={styles.name}>Ranveer kapoor</Text>
                        <Text style={styles.increaseText}>+0.51%</Text>
                        <Text style={[styles.name,{color:'#bfbfbf'}]}>6,267.00</Text>
                        <View style={{flex:1,justifyContent:'flex-end'}}>
                            <Button
                                title="Details"
                                color="green"
                                buttonStyle={{borderColor:'#ccc',borderWidth:1,borderRadius:15,height:30,backgroundColor:'#fff'}}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.name}>Akshay Kumar</Text>
                        <Text style={styles.decreaseText}>-0.31%</Text>
                        <Text style={[styles.name,{color:'#bfbfbf'}]}>4,567.00</Text>
                        <View style={{flex:1,justifyContent:'flex-end'}}>
                            <Button
                                title="Details"
                                color="green"
                                buttonStyle={{borderColor:'#ccc',borderWidth:1,borderRadius:15,height:30,backgroundColor:'#fff'}}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const WidgetsNav = StackNavigator({
    Widgets:{screen: Widgets}
})

export default WidgetsNav