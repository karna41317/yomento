import React from 'react'
import {View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Dimensions} from 'react-native'
import {StackNavigator} from 'react-navigation'
import Hr from 'react-native-hr'
import {Icon} from 'react-native-elements'
import styles from './Styles'


const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

class Feedback extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: <Image
                source={require('./images/logo.png')}
                style={{height: 26, width: 26, tintColor: '#fff'}}
            />,
            drawerIcon: <Icon name="library-books" color="white"  />,
            headerLeft:
                <TouchableOpacity onPress={() => navigation.navigate('NEWS')}>
                    <Image
                        source={require('./icon/leftArrow.png')}
                        style={{height: 25, width: 25, marginLeft: 10, tintColor: '#fff'}}
                    />
                </TouchableOpacity>,
            headerRight:
                <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                    <Icon name="menu" color="white" size={30} style={{marginRight:10}} />
                </TouchableOpacity>,
            headerStyle: {
                backgroundColor: '#00c497'
            }
        }
    }
    constructor(props) {
        super(props);
        this.state = { username: '',password: '',email: '' };
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Image source={require('./images/login.jpg')}
                       style={{height: HEIGHT,width: WIDTH,flex:1,position:'absolute',opacity: 0.8}} />
                <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
                    <View style={styles.tabItems}><Image
                        source={require('./icon/phone.png')}
                        style={styles.tabIconStyles}
                    /></View>
                    <View style={styles.activeTab}><Image
                        source={require('./icon/inbox.png')}
                        style={{ height: 25,
                            width: 25,
                            tintColor: '#01a381'}}
                    /></View>
                    <View style={styles.tabItems}><Image
                        source={require('./icon/location.png')}
                        style={styles.tabIconStyles}
                    /></View>

                </View>
                <View>
                    <Text style={styles.tabTitle}>SEND FEEDBACK</Text>
                    <Text style={styles.tabTagline}>Your feedback is important to us.</Text>
                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Username"
                        placeholderTextColor="white"
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Email"
                        placeholderTextColor="white"
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                    />
                    <View style={{flexDirection:'row',marginLeft: 15,}}>
                        <View style={{flex:8,}}>
                            <TextInput
                                style={{ height: 40,
                                    marginRight: 5,
                                    backgroundColor:'rgba(0,0,0,0.0)',
                                    paddingLeft: 15,
                                    color: '#fff',}}
                                placeholder="write something..."
                                placeholderTextColor="white"
                                onChangeText={(username) => this.setState({username})}
                                value={this.state.username}
                            />
                            <Hr lineColor="#00e6b0"  />
                        </View>
                        <View style={{flex:1}}>
                            <Image source={require('./icon/rightArrow.png')} style={{marginTop:7,tintColor:'#fff',width:20,height:20}} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}


const FeedbackNav = StackNavigator({
    Feedback:{screen: Feedback}
})

export default FeedbackNav