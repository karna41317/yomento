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
import { PrimaryButton, SecondaryButton } from '../../../components/buttons/Button'
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
  goToForgotPassword = () => {

  }
  goToContactSupport = () => {

  }


  render () {
    return (
      <GradientWrapper name={'default'}>
        <View style={styles.formContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Member login</Text>
            <TouchableOpacity onPress={this.onIconPress}>
              <Icon active name='close'
                    style={[styles.icon, styles.closeIcon]}/>
            </TouchableOpacity>
          </View>
          <View>
            <MonoLogo width={100} height={100} color={'#0079FF'}/>
          </View>
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
          <PrimaryButton rounded full style={styles.primaryButtonStyle}
                         onPress={this.signUpUser}>
            Log In
          </PrimaryButton>
          <SecondaryButton
            style={styles.secondaryButtonStyle}
            textStyles={styles.forgotText}
            onPress={this.goToForgotPassword}>
            I forgot my password
          </SecondaryButton>
          <SecondaryButton
            style={[styles.secondaryButtonStyle, styles.contactSupport]}
            textStyles={styles.contactText}
            onPress={this.goToContactSupport}>
            Contact Support
          </SecondaryButton>

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
  primaryButtonStyle: {
    marginTop: 10,
    backgroundColor: '#0079FF',
    width: Dimensions.get('window').width - 50,
  },
  secondaryButtonStyle: {
    marginTop: 15,
    backgroundColor: 'transparent',
    borderWidth: 0,
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
  contactSupport: {
    position: 'absolute',
    bottom: 40
  },
  forgotText: {
    ...semiBoldTextMixin(14, '#3EABFF'),
    letterSpacing: 2
  },
  contactText: {
    ...semiBoldTextMixin(14, '#3EABFF'),
    letterSpacing: 2
  }
})
