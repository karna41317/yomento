import React from 'react'
import {Image,View,Dimensions,Text,TextInput} from 'react-native'
import {Button} from 'react-native-elements'
import styles from './Styles'


const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class Forget extends React.Component{
    constructor(props) {
        super(props);
        this.state = { username: '',password: '' };
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Image source={require('../images/login.jpg')} style={{height: HEIGHT,width: WIDTH,flex:1,position:'absolute'}} />
                <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                    <Image source={require('../images/logo.png')} style={{tintColor: '#fff'}}  />
                </View>
                <View style={{flex:1,justifyContent: 'flex-end',marginBottom:10}}>
                    <View>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="enter username"
                            onChangeText={(username) => this.setState({username})}
                            value={this.state.username}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="******"
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                            secureTextEntry={true}
                        />
                    </View>
                    <View>
                        <Button title="Get Started" buttonStyle={{borderRadius:20,backgroundColor: '#56bd94'}}/>
                    </View>
                    <View style={styles.bottomView}>
                        <Text style={{color:'#fff'}}>Create Account</Text>
                        <Text style={{color:'#fff'}}>Need Help?</Text>
                    </View>
                </View>
            </View>
        )
    }
}
