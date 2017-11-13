/**
 * Created by Karan on 2017-10-22.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, Image, StyleSheet, TextInput, Dimensions, Text } from 'react-native'
import { authSelector } from 'src/selectors'
import GradientWrapper from 'src/components/partials/gradientWrapper'
//import { View } from 'src/components/wrappers/viewWrapper'
import { Container, Header, Left, Body, Right, Button as NativeButton, Icon, Title, Item, Input } from 'native-base'
import { usernameChanged, passwordChanged, emailChanged, registerUser } from 'src/actions'
import { PrimaryButton } from '../../../components/buttons/Button'
import MonoLogo from 'src/components/logos/mono-logo'
import { lightTextMixin } from '../../../styles/mixins'
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

  render () {
    return (
      <GradientWrapper name={'default'}>

        {/*<View>
          <Text style={styles.textInput}>
              Create Account
          </Text>
          <Input placeholder='Name'
                 placeholderTextColor={'white'}
                 onChangeText={this.onChange.bind(this, 'user')}
                 style={styles.textInput}/>
        </View>*/}
        <View style={styles.formContainer}>
          <View>
            <MonoLogo width={200} height={200} color={'#0079FF'}/>
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
                   placeholderTextColor={'white'}
                   onChangeText={this.onChange.bind(this, 'email')}
                   style={styles.textInput}/>
          </Item>
          <Item rounded style={styles.item}>
            <Icon active name='lock' style={styles.icon}/>
            <Input placeholder='Password'
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
    marginLeft: 10
  },
  logoText: {
    width: 250,
    height: 100,
    marginTop: 50,
    resizeMode: 'contain',
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  textInput: {
    color: 'white',
    ...lightTextMixin(20, '#FFF')
  },
  item: {
    borderColor: '#007DFF',
    marginVertical: 8,
    width: Dimensions.get('window').width-50
  },

  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: 'white',
  },
  content: {
    // not cool but good enough to make all inputs visible when keyboard is active
    paddingBottom: 300,
  },
  card1: {
    paddingVertical: 16,
  },
  card2: {
    padding: 16,
  },
  input: {
    marginTop: 4,
  },
  title: {
    paddingBottom: 16,
    textAlign: 'center',
    color: '#404d5b',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  buttonStyle: {
    marginTop: 10,
    backgroundColor: '#0079FF',
    width: Dimensions.get('window').width-50
  },
  formContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
})
