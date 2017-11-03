import React from 'react'
import {View,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    Dimensions} from 'react-native'
import styles from './Styles'
import {StackNavigator} from 'react-navigation'
import Hr from 'react-native-hr'
import {Icon} from 'react-native-elements'
var ImagePicker = require('react-native-image-picker');

var options = {
    title: 'Select Avatar',
    customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

class Profile extends React.Component{
    static navigationOptions = ({navigation}) =>{
        return{
            title: <Image
                source={require('../images/logo.png')}
                style={{height: 26,width: 26,tintColor: '#fff'}}
            />,
            drawerIcon: <Icon name="person" color="white" />,
            headerLeft:
                <TouchableOpacity onPress={()=> navigation.navigate('NEWS')}>
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
    state = {avatarSource: ''}
    // show image picker
    showPicker(){
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <View style={{justifyContent:'center',alignItems: 'center',backgroundColor:'#01cca1'}}>
                    <TouchableOpacity onPress={()=> this.showPicker()}>
                        <Image source={this.state.avatarSource || require('../images/tech.jpg')} style={styles.profileImg}  />
                    </TouchableOpacity>

                    <Text style={styles.usernameStyle}>Kumar Sanket</Text>
                    <Text style={styles.tabTagline}>CEO, GeekyAnts</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                    <View style={styles.tabItems}>
                        <Text style={styles.number}>13</Text>
                        <Text style={styles.category}>Comments</Text>
                    </View>
                    <View style={styles.tabItems}>
                        <Text style={styles.number}>12</Text>
                        <Text style={styles.category}>Channels</Text>
                    </View>
                    <View style={styles.tabItems}>
                        <Text style={styles.number}>52</Text>
                        <Text style={styles.category}>Bookmarks</Text>
                    </View>

                </View>
                <Hr lineColor="#ccc" />
                <ScrollView>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Image source={require('../images/fashion.png')} style={{height:90,width:80}} />
                        </View>
                        <View style={styles.cardStyle}>
                            <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize: 12,marginRight:10}}>style.com</Text>
                                <View>
                                    <TouchableOpacity>
                                        <Text style={{fontWeight:'bold',fontSize: 12}}>FASHION</Text>
                                    </TouchableOpacity>
                                    <Hr lineColor="#8c8c8c" />
                                </View>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                    </View>
                    <Hr lineColor="#ccc" />
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Image source={require('../images/tech.jpg')} style={{height:90,width:80}} />
                        </View>
                        <View style={styles.cardStyle}>
                            <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize: 12,marginRight:10}}>tech.com</Text>
                                <View>
                                    <TouchableOpacity>
                                        <Text style={{fontWeight:'bold',fontSize: 12}}>TECHNOLOGY</Text>
                                    </TouchableOpacity>
                                    <Hr lineColor="#8c8c8c" />
                                </View>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                    </View>
                    <Hr lineColor="#ccc" />
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Image source={require('../images/tech.jpg')} style={{height:90,width:80}} />
                        </View>
                        <View style={styles.cardStyle}>
                            <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize: 12,marginRight:10}}>tech.com</Text>
                                <View>
                                    <TouchableOpacity>
                                        <Text style={{fontWeight:'bold',fontSize: 12}}>TECHNOLOGY</Text>
                                    </TouchableOpacity>
                                    <Hr lineColor="#8c8c8c" />
                                </View>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                    </View>
                    <Hr lineColor="#ccc" />
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Image source={require('../images/tech.jpg')} style={{height:90,width:80}} />
                        </View>
                        <View style={styles.cardStyle}>
                            <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize: 12,marginRight:10}}>tech.com</Text>
                                <View>
                                    <TouchableOpacity>
                                        <Text style={{fontWeight:'bold',fontSize: 12}}>TECHNOLOGY</Text>
                                    </TouchableOpacity>
                                    <Hr lineColor="#8c8c8c" />
                                </View>
                            </View>
                        </View>
                        <Hr lineColor="#ccc" />
                    </View>
                    <Hr lineColor="#ccc" />
                </ScrollView>

            </View>
        )
    }
}

const ProfileNav = StackNavigator({
    Settings: {screen: Profile}
})

export default ProfileNav