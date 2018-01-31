import React from 'react'
import {View,
    ScrollView,
    Image,
    Text,
    TouchableOpacity,
    Dimensions} from 'react-native'
import {Button} from 'react-native-elements'
import Hr from 'react-native-hr'
import {StackNavigator,NavigationActions} from 'react-navigation'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

export default  class Channel extends React.Component{

    static navigationOptions = ({navigation}) =>{
        return{
            title: <Image
                source={require('../images/logo.png')}
                style={{height: 26,width: 26,tintColor: '#fff'}}
            />,
            headerLeft:
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Image
                        source={require('../icon/leftArrow.png')}
                        style={{height: 26,width: 26,marginLeft:10,tintColor: '#fff'}}
                    />
                </TouchableOpacity>,
            headerRight:
                <TouchableOpacity onPress={()=> navigation.navigate('DrawerOpen')}>
                    <Image
                        source={require('../icon/nav.png')}
                        style={{height: 32,width: 35,marginRight:10,tintColor: '#fff'}}
                    />
                </TouchableOpacity>,
            headerStyle: {
                backgroundColor: '#00c497'
            }
        }
    }

    render(){
        return(
            <ScrollView style={{flex:1}}>
                { // temporary view, require listView
                }
                <Image
                    style={{width:WIDTH,height:HEIGHT/4}}
                    source={require('../images/science.jpg')}
                >
                    <View style={{flex:1,justifyContent:'space-around',alignItems:'center'}}>
                        <Text style={styles.channelName}>SCIENCE CHANNEL</Text>
                        <Button title="Following" buttonStyle={{height:34,borderRadius:17,backgroundColor:'#fff'}} color="#00c497"/>
                        <Text style={{color:'#fff',fontWeight:'bold',  backgroundColor:'transparent'}}>234k Followers</Text>
                    </View>
                </Image>

                <View style={[styles.cardStyle,{marginTop:22}]}>
                    <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                            <Text style={{fontSize: 12,marginRight:10}}>CDC</Text>
                            <Image
                                source={require('../icon/clock.png')}
                                style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5}} />
                            <Text style={{fontWeight:'bold',fontSize: 12}}>1h ago</Text>
                        </View>

                    </View>
                </View>
                <Hr lineColor="#ccc" />
                <View style={[styles.cardStyle,{marginTop:22}]}>
                    <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                            <Text style={{fontSize: 12,marginRight:10}}>CDC</Text>
                            <Image
                                source={require('../icon/clock.png')}
                                style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5}} />
                            <Text style={{fontWeight:'bold',fontSize: 12}}>1h ago</Text>
                        </View>

                    </View>
                </View>
                <Hr lineColor="#ccc" />
                <View style={[styles.cardStyle,{marginTop:22}]}>
                    <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                            <Text style={{fontSize: 12,marginRight:10}}>CDC</Text>
                            <Image
                                source={require('../icon/clock.png')}
                                style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5}} />
                            <Text style={{fontWeight:'bold',fontSize: 12}}>1h ago</Text>
                        </View>

                    </View>
                </View>
                <Hr lineColor="#ccc" />
                <View style={[styles.cardStyle,{marginTop:22}]}>
                    <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                            <Text style={{fontSize: 12,marginRight:10}}>CDC</Text>
                            <Image
                                source={require('../icon/clock.png')}
                                style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5}} />
                            <Text style={{fontWeight:'bold',fontSize: 12}}>1h ago</Text>
                        </View>

                    </View>
                </View>
                <Hr lineColor="#ccc" />

            </ScrollView>
        )
    }
}


const styles = {
    cardStyle:{
        margin: 10,
        marginTop: 15,
        marginBottom: 15,
        padding: 5,
    },
    articleTitle:{
        paddingBottom: 15,
        fontWeight: 'bold',
    },
    timeIconStyle:{
        tintColor: '#4d4d4d',
        width:12,
        height:12,
        marginRight:5
    },
    channelName:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:18,
        backgroundColor:'transparent'
    }
}
