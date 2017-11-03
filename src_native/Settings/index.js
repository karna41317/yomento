import React from 'react'
import {View,Text,Image,TouchableOpacity,Switch,TextInput,ScrollView} from 'react-native'
import {Icon} from 'react-native-elements'
import styles from './Styles'
import {StackNavigator} from 'react-navigation'


class Settings extends React.Component{
    static navigationOptions = ({navigation}) =>{
        return{
            title: <Image
                source={require('../images/logo.png')}
                style={{height: 26,width: 26,tintColor: '#fff'}}
            />,
            drawerIcon:  <Icon name="settings" color="white"   />,
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

    state = {monday: true,tuesday:false,wednesday:false,thursday:true,friday:true,saturday:false,sunday:true,username: '',email: '',password:''}

    render(){
        return(
            <ScrollView bounces={false} style={{flex:1}}>
                <View style={{backgroundColor:'#01cca1'}}>
                    <View>
                        <Text style={styles.UITitle}>Settings</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:15}}>

                        <View style={styles.tabItems}>
                            <Image
                                source={require('../icon/cloud_upload.png')}
                                style={{tintColor:'#e6e6e6',height:30,width:35,}}
                            />
                        </View>
                        <Image
                            source={require('../images/tech.jpg')}
                            style={styles.tabItems}
                        />
                        <View style={styles.tabItems}>
                            <Image
                                source={require('../icon/cloud_download.png')}
                                style={{tintColor:'#e6e6e6',height:30,width:35,}}
                            />
                        </View>
                    </View>
                    <View>
                        <View style={styles.formControl}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder="Username"
                                placeholderTextColor="#fff"
                                onChangeText={(username) => this.setState({username})}
                                value={this.state.username}
                            />
                        </View>
                        <View style={styles.formControl}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder="Email"
                                placeholderTextColor="#fff"
                                onChangeText={(email) => this.setState({email})}
                                value={this.state.email}
                            />
                        </View>
                        <View style={styles.formControl}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder="******"
                                placeholderTextColor="#fff"
                                onChangeText={(password) => this.setState({password})}
                                value={this.state.password}
                                secureTextEntry={true}
                            />
                        </View>
                    </View>
                </View>

                <View style={{flex:1}}>
                    <Text style={styles.swicherTitle}>EMAIL NOTIFICATIONS</Text>
                    <View style={styles.list}>
                        <Text style={styles.day}>Monday</Text>
                        <Switch

                            value={this.state.monday}
                            thumbTintColor="#cccccc"
                            onTintColor="#01cca1"
                            tintColor="#ccc"
                            onValueChange={(state)=>this.setState({monday:state })} />
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.day}>Tuesday</Text>
                        <Switch

                            value={this.state.tuesday}
                            thumbTintColor="#cccccc"
                            onTintColor="#01cca1"
                            tintColor="#ccc"
                            onValueChange={(state)=>this.setState({tuesday:state })} />
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.day}>Wednesday</Text>
                        <Switch

                            value={this.state.wednesday}
                            thumbTintColor="#cccccc"
                            onTintColor="#01cca1"
                            tintColor="#ccc"
                            onValueChange={(state)=>this.setState({wednesday:state })} />
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.day}>Thursday</Text>
                        <Switch

                            value={this.state.thursday}
                            thumbTintColor="#cccccc"
                            onTintColor="#01cca1"
                            tintColor="#ccc"
                            onValueChange={(state)=>this.setState({thursday:state })} />
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.day}>Friday</Text>
                        <Switch

                            value={this.state.friday}
                            thumbTintColor="#cccccc"
                            onTintColor="#01cca1"
                            tintColor="#ccc"
                            onValueChange={(state)=>this.setState({friday:state })} />
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.day}>Saturday</Text>
                        <Switch

                            value={this.state.saturday}
                            thumbTintColor="#cccccc"
                            onTintColor="#01cca1"
                            tintColor="#ccc"
                            onValueChange={(state)=>this.setState({saturday:state })} />
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.day}>Sunday</Text>
                        <Switch

                            value={this.state.sunday}
                            thumbTintColor="#cccccc"
                            onTintColor="#01cca1"
                            onValueChange={(state)=>this.setState({sunday:state })} />
                    </View>



                </View>
            </ScrollView>
        )
    }
}
const SettingsNav = StackNavigator({
    Settings: {screen: Settings}
})

export default SettingsNav