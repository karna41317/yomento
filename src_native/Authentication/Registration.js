import React from 'react'
import {Image,
    View,
    Dimensions,
    Text,
    TextInput,
    TouchableOpacity} from 'react-native'
import {Button} from 'react-native-elements'
import {connect} from 'react-redux'
import * as actions from '../redux/action'
import styles from './Styles'


const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

class Registration extends React.Component{
    constructor(props) {
        super(props);
    }

    onEmailChanged = (text) =>{
        this.props.emailChanged(text)
    }

    onUsernameChanged = (text) =>{
        this.props.usernameChanged(text)
    }

    onPasswordChanged = (text) =>{
        this.props.passwordChanged(text)
    }

    onRegister = () =>{
        const { username,email,password,navigation} = this.props

        this.props.registerUser(username,email,password,navigation)
    }
    focusNext = (nextField) =>{
        this.refs[nextField].focus()
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Image source={require('../images/login.jpg')} style={{height: HEIGHT,width: WIDTH,flex:1,position:'absolute'}} />
                <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:20}}>
                    <Text style={styles.appTitle}>CREATE ACCOUNT</Text>
                </View>
                <View style={{flex:1,justifyContent: 'flex-end',marginBottom:10}}>
                    <View style={styles.formControl}>
                        <TextInput
                            ref="username"
                            returnKeyType={'next'}
                            onSubmitEditing={()=> this.focusNext('email')}
                            style={styles.inputStyle}
                            placeholder="Username"
                            placeholderTextColor="#fff"
                            onChangeText={(username) => this.onUsernameChanged(username) }
                            value={this.props.username}
                        />
                    </View>
                    <View style={styles.formControl}>
                        <TextInput
                            ref="email"
                            returnKeyType={'next'}
                            onSubmitEditing={()=> this.focusNext('password')}
                            style={styles.inputStyle}
                            placeholder="Email"
                            placeholderTextColor="#fff"
                            onChangeText={(email) => this.onEmailChanged(email)}
                            value={this.props.email}
                        />
                    </View>
                    <View style={styles.formControl}>
                        <TextInput
                            ref="password"
                            style={styles.inputStyle}
                            placeholder="******"
                            placeholderTextColor="#fff"
                            onChangeText={(password) => this.onPasswordChanged(password)}
                            value={this.props.password}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.formControl}>
                        <Button
                            onPress={()=>this.onRegister()}
                            title="Continue"
                            buttonStyle={{borderRadius:20,backgroundColor: 'transparent',borderColor:'#adebad',borderWidth:1}}/>
                    </View>
                    <View style={styles.bottomView}>
                        <Text style={{color:'#fff'}}>Terms & Conditions</Text>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('LOGIN')}>
                            <Text style={{color:'#fff'}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    const { username,email, password } = auth
    return{
        username, email,password
    }
}

export default connect(mapStateToProps,actions)(Registration)