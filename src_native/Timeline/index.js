import React from 'react'
import {View,Text,Image,TouchableOpacity,ScrollView} from 'react-native'
import {StackNavigator} from 'react-navigation'
import {Icon} from 'react-native-elements'

class Timeline extends React.Component{
    static navigationOptions = ({navigation}) =>{
        return{
            title: <Image
                source={require('../images/logo.png')}
                style={{height: 26,width: 26,tintColor: '#fff'}}
            />,
            drawerIcon: <Icon name="av-timer" color="white"/>,
            headerLeft:
                <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                    <Image
                        source={require('../icon/leftArrow.png')}
                        style={{height: 25,width: 25,marginLeft:10,tintColor: '#fff'}}
                    />
                </TouchableOpacity>,
            headerRight:
                <TouchableOpacity onPress={()=> navigation.navigate('DrawerOpen')}>
                    <Icon name="menu" color="white" size={30} style={{marginRight:10}} />
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
                    <Text style={styles.headerText}>MONDAY</Text>
                    <Text style={{fontSize:12,color:'#fff',margin:5}}>Aug 6, 2016</Text>
                </View>
                <ScrollView style={styles.container}>
                    <View style={{borderLeftWidth:1,borderLeftColor: '#ccc',marginLeft:10,}}>
                        <Text style={{color:'#fff'}}>hiden text</Text>
                    </View>
                        <View style={{flexDirection:'row',justifyContent:'flex-start',}}>
                            <Image
                                source={require('../icon/bookmark.png')}
                                style={{tintColor: '#4d4d4d',width:22,height:18,}} />
                            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',}}>
                                <Text style={styles.username}>BOOKMARKED</Text>
                                <View style={{flexDirection:'row',justifyContent:'flex-end',marginRight:10}}>
                                    <Image
                                        source={require('../icon/clock.png')}
                                        style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,}} />
                                    <Text style={{fontSize: 12}}>11:00 AM</Text>

                                </View>
                            </View>

                        </View>
                        <View style={styles.noteView}>
                            <Text style={styles.note}>Its simply dummy text of the printing and typesetting industry.</Text>
                        </View>
                    <View style={{flexDirection:'row',justifyContent:'flex-start',}}>
                        <Image
                            source={require('../icon/comments.png')}
                            style={{tintColor: '#4d4d4d',width:22,height:20,}} />
                        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',}}>
                            <Text style={styles.username}>COMMENTS</Text>
                            <View style={{flexDirection:'row',justifyContent:'flex-end',marginRight:10}}>
                                <Image
                                    source={require('../icon/clock.png')}
                                    style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,}} />
                                <Text style={{fontSize: 12}}>11:00 AM</Text>

                            </View>
                        </View>

                    </View>
                        <View style={styles.noteView}>
                            <Text style={styles.note}>printing and typesetting ind Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </View>
                    <View>
                        <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                            <Image
                                source={require('../icon/deliverd.jpg')}
                                style={{width:20,height:15,}} />
                            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={styles.username}>FOLLOWED</Text>
                                <View style={{flexDirection:'row',justifyContent:'flex-end',marginRight:10}}>
                                    <Image
                                        source={require('../icon/clock.png')}
                                        style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,}} />
                                    <Text style={{fontSize: 12}}>11:00 AM</Text>

                                </View>
                            </View>
                        </View>
                        <View style={styles.noteView}>
                            <Text style={styles.note}>Ind Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                            <Image
                                source={require('../icon/share.png')}
                                style={{tintColor: '#4d4d4d',width:18,height:18,}} />
                            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={styles.username}>SAVED</Text>
                                <View style={{flexDirection:'row',justifyContent:'flex-end',marginRight:10}}>
                                    <Image
                                        source={require('../icon/clock.png')}
                                        style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,}} />
                                    <Text style={{fontSize: 12}}>9:45 AM</Text>

                                </View>
                            </View>
                        </View>
                        <View style={styles.noteView}>
                            <Text style={styles.note}>Lorem Ipsum is simply dummy text of the printing and typesetting ind Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                            <Image
                                source={require('../icon/archive.png')}
                                style={{tintColor: '#4d4d4d',width:18,height:15,}} />
                            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={styles.username}>ARCHIVED</Text>
                                <View style={{flexDirection:'row',justifyContent:'flex-end',marginRight:10}}>
                                    <Image
                                        source={require('../icon/clock.png')}
                                        style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5,}} />
                                    <Text style={{fontSize: 12}}>9:45 AM</Text>

                                </View>
                            </View>
                        </View>
                        <View style={styles.noteView}>
                            <Text style={styles.note}>Lorem Ipsum is simply dummy text of the printing and typesetting ind Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </View>
                    </View>

                </ScrollView>
            </View>
        )
    }
}

const styles = {
    header: {
        height: 70,
        backgroundColor: '#01cca1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff'
    },
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    noteView:{
        borderLeftWidth:1,
        borderLeftColor: '#ccc',
        margin:10,
        marginTop:0,
        paddingLeft:20,
        paddingTop:10,
        paddingBottom:15
    },
    note:{
        fontWeight:'bold',
        fontSize: 12,
    },
    username:{
        fontWeight:'bold',
        fontSize: 12,
        color:'#01cca1',
        marginLeft:10
    },
}

const TimelineNav = StackNavigator({
    Widgets:{screen: Timeline}
})

export default TimelineNav