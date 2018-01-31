import React from 'react'
import { Image, View, Dimensions, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native'
import { Button } from 'react-native-elements'
import styles from './Styles'
import { connect } from 'react-redux'
import { usernameChanged, passwordChanged, userLogin } from '../redux/action'
import * as Animatable from 'react-native-animatable'
import GradientWrapper from '../../src/components/partials/gradientWrapper'
/*import React, { Component } from 'react';*/
import { Container, Header, Content, Left, Body, Right, Icon, Title } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

class Login extends React.Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    // AsyncStorage.getItem('uid').then((value)=>{
    //     if(value !== null){
    //                 this.props.navigation.navigate('NEWS')
    //             }
    // })

  }

  onEmailChanged = (text) => {
    this.props.usernameChanged(text)
  }

  onPasswordChanged = (text) => {
    this.props.passwordChanged(text)
  }

  renderError () {
    if (this.props.error) {
      return (
        <View>
            <Text style={{
              backgroundColor: 'transparent',
              textAlign: 'center',
            }}>{this.props.error}</Text>
        </View>
      )
    }
  }

  Login () {
    const {username, password, navigation} = this.props
    this.props.userLogin(username, password, navigation)
  }

  render () {
    return (
      <GradientWrapper>
          <View style={{flex: 1}}>
              <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              </View>
              <Animatable.View animation="bounceInUp" duration={2000} style={{
                flex: 1,
                justifyContent: 'flex-end',
                marginBottom: 15,
              }}>
                {this.renderError()}
                  <View style={styles.formControl}>
                      <TextInput
                        style={styles.inputStyle}
                        placeholder="Username"
                        placeholderTextColor="#fff"
                        onChangeText={(username) => this.onEmailChanged(username)}
                        value={this.props.username}
                      />
                  </View>
                  <View style={styles.formControl}>
                      <TextInput
                        style={styles.inputStyle}
                        placeholder="******"
                        placeholderTextColor="#fff"
                        onChangeText={(password) => this.props.passwordChanged(password)}
                        value={this.props.password}
                        secureTextEntry={true}
                      />
                  </View>
                  <View style={styles.formControl}>
                      <Button
                        title="Get Started"
                        buttonStyle={{borderRadius: 20, backgroundColor: '#56bd94'}}
                        onPress={() => this.Login()}
                      />
                  </View>
                  <View style={styles.bottomView}>
                      <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('REGISTER')}>
                          <Text style={{color: '#fff'}}>Create Account</Text>
                      </TouchableOpacity>

                      <Text style={{color: '#fff'}}>Need Help?</Text>
                  </View>
              </Animatable.View>
          </View>
          {/*<Container>
              <Header>
                  <Left>
                      <Button transparent>
                          <Icon name='arrow-back' />
                      </Button>
                  </Left>
                  <Body>
                  <Title>Header</Title>
                  </Body>
                  <Right>
                      <Button transparent>
                          <Icon name='menu' />
                      </Button>
                  </Right>
              </Header>
              <Content>
                  <Grid>
                      <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
                      <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
                  </Grid>
              </Content>
          </Container>*/}


      </GradientWrapper>
    )
  }
}

const mapStateToProps = ({auth}) => {
  const {username, password, error} = auth
  return {
    username, password, error,
  }
}

export default connect(mapStateToProps,
  {usernameChanged, passwordChanged, userLogin})(Login)
