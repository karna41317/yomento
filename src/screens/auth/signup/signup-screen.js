/**
 * Created by Karan on 2017-10-22.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { KeyboardAvoidingView, View, Image, StyleSheet, TextInput, Dimensions, Text, TouchableOpacity } from 'react-native'
import { authSelector } from 'src/selectors'
import GradientWrapper from 'src/components/partials/gradientWrapper'
//import { View } from 'src/components/wrappers/viewWrapper'
import { Container, Header, Left, Body, Right, Button as NativeButton, Icon, Title, Item, Input } from 'native-base'
import { usernameChanged, passwordChanged, emailChanged, registerUser } from 'src/actions'
import { PrimaryButton } from '../../../components/buttons/Button'
import MonoLogo from 'src/components/logos/mono-logo'
import { lightTextMixin, semiBoldTextMixin } from '../../../styles/mixins'

@connect(authSelector)
export default class Home extends Component {

  constructor (props) {
    super(props)
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
    }
  }

  goToLogin = () => {
    const {navigation} = this.props
    navigation.navigate('login')
  }
  goToSignup = () => {
    const {navigation} = this.props
    navigation.navigate('signup')
  }

  goBack = () => {
    this.props.navigation.goBack()
  }

  onChange = (name, text) => {
    console.log('printing change text, name', text, name)

    const {dispatch} = this.props
    switch (name) {

      case 'user':
        dispatch(usernameChanged(text))
        break

      case 'email':
        dispatch(emailChanged(text))
        break

      case 'pass':
        dispatch(passwordChanged(text))
        break
      default:
        break
    }
  }

  validation (user) {
    return true
  }

  signUpUser = () => {
    const {user, dispatch, navigation} = this.props
    if (user && this.validation(user)) {
      dispatch(registerUser(user, navigation))
    }
    navigation.navigate('onBoarding')
  }
  onIconPress = () => {
    this.props.navigation.goBack()
  }

  render () {
    return (
      <GradientWrapper name={'default'}>
        <View style={styles.formContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Create Account</Text>
            <TouchableOpacity onPress={this.onIconPress}>
              <Icon active name='close'
                    style={[styles.icon, styles.closeIcon]}/>
            </TouchableOpacity>
          </View>
          <View>
            <MonoLogo width={100} height={100} color={'#0079FF'}/>
          </View>
          <Item rounded style={styles.item}>
            <Icon active name='person' style={styles.icon}/>
            <Input placeholder='Name'
                   placeholderTextColor={'white'}
                   onChangeText={this.onChange.bind(this, 'user')}
                   style={styles.textInput}/>
          </Item>
          <Item rounded style={styles.item}>
            <Icon active name='ios-mail' style={styles.icon}/>
            <Input placeholder='Email'
                   keyboardType='email-address'
                   placeholderTextColor={'white'}
                   onChangeText={this.onChange.bind(this, 'email')}
                   style={styles.textInput}/>
          </Item>
          <Item rounded style={styles.item}>
            <Icon active name='lock' style={styles.icon}/>
            <Input placeholder='Password'
                   secureTextEntry

                   placeholderTextColor={'white'}
                   onChangeText={this.onChange.bind(this, 'pass')}
                   style={styles.textInput}/>
          </Item>
          <PrimaryButton rounded full style={styles.buttonStyle}
                         onPress={this.signUpUser}>
            Sign Up
          </PrimaryButton>
        </View>
      </GradientWrapper>
    )
  }
}

Home.propTypes = {
  disableInteractionCheck: PropTypes.bool,
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    color: 'white',
    marginLeft: 10,
  },
  textInput: {
    color: 'white',
    ...lightTextMixin(20, '#FFF')
  },

  item: {
    borderColor: '#007DFF',
    marginVertical: 5,
    width: Dimensions.get('window').width - 50,
  },
  buttonStyle: {
    marginTop: 10,
    backgroundColor: '#0079FF',
    width: Dimensions.get('window').width - 50,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  headerContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  headerText: {
    backgroundColor: 'transparent',
    ...semiBoldTextMixin(20, '#FFF'),
  },
  closeIcon: {
    left: 70,
    fontSize: 50,
    color: '#0079FF',
    marginLeft: 10,
  },
})
