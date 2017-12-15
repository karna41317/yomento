import React, { Component } from 'react'
import { View, Text, Dimensions,StyleSheet } from 'react-native'
import GradientWrapper from '../../components/partials/gradientWrapper'
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Left,Right, Body, Icon, Button } from 'src/components/native-base'
import { styles } from './profile.styles'
import { PrimaryButton, SecondaryButton } from '../../components/buttons/Button'
import Radar from 'src/components/radar_chart/Radar'
import { connect } from 'react-redux'
import { profileSelector } from './profile.selector'
import { profileLanunched, getDashboardCards } from 'src/actions'
import { map, get, each, snakeCase, toLower, toUpper, upperFirst, startCase, reject, has, some, find } from 'lodash'
import HTML from 'react-native-render-html'
import { boldTextMixin, regularTextMixin, semiBoldTextMixin } from '../../styles/mixins'

@connect(profileSelector)
export default class selfRatingIntroScreen extends Component {

  componentDidMount () {
  }

  parseJson = (content) => {
    return JSON.parse(JSON.stringify(content))
  }

  goToIdealRating = () => {
    this.props.navigation.navigate('selfRatingLoop')
  }
  closePress = () => {
    this.props.navigation.goBack()
  }


  updateContent = (text) => {
    const {auth, loop} = this.props
    const userName = get(auth, 'userData.user.first_name')
    const personName = get(loop, 'loopData.personName')
    let originalText = text

    if (userName) {
      originalText = originalText.replace('<first_name>', userName)
    }
    if (personName) {
      originalText = originalText.replace('<name_of_colleague>', personName)
    }

    return originalText
  }
  getHeader = () => {
    return (
      <Header backgroundColor={'transparent'} style={customStyles.header}>
        <Left>

        </Left>
        <Body>
        {/*<Button
          iconLeft transparent rounded bordered info
          onPress={this.scrollToFinished}
          style={customStyles.finishedButton}>

        </Button>*/}
        <Text style={customStyles.finishedText}>PROFILE</Text>
        </Body>
        <Right>
          <Button transparent onPress={this.closePress}>
            <Icon name='close'

                  style={{fontSize: 40, color: '#419BF9'}}/>
          </Button>
        </Right>
      </Header>
    )
  }

  render () {
    console.log('printing', this.props)
    const {profile} = this.props
    const introResponse = get(profile, 'intro_content')
    console.log('printing', introResponse)
    if (!profile.fetching && introResponse) {
      const loopContent = eval(this.parseJson(introResponse))

      const selfResponse = find(loopContent, {screen_type: 'myself_intro_why'})
      console.log('printing', selfResponse)
      const selfDescription = eval(this.parseJson(selfResponse.description))
      console.log('printing', selfDescription)
      const buttonText = get(selfDescription[0], 'buttons[0].text')
      const title = get(selfDescription[0], 'data[0].title')
      const description = get(selfDescription[0], 'data[0].description')

      const viewDescription = `<View >${description}</View>`
      const updateDescription = this.updateContent(viewDescription)

      return (
        <GradientWrapper name={'profile'}>

          {this.getHeader()}
          <View>
            <Text style={{
              backgroundColor: 'transparent',
              ...boldTextMixin(24, '#282850'),
              position: 'absolute',
              top: 80,
              left: 30,
              right: 20,
              textAlign: 'left',

            }}>
              {this.updateContent(title)}
            </Text>
            <View>
              <HTML
                containerStyle={{
                  position: 'absolute',
                  top: 120,
                  left: 30, right: 20,
                  backgroundColor: 'transparent',
                }}
                classesStyles={{
                  'general': {
                    ...regularTextMixin(18, '#282850'),
                    textAlign: 'left',
                  },
                }}
                html={updateDescription==="" ? "<p></p>" : updateDescription}
              /></View>
          </View>
          <PrimaryButton
            onPress={this.goToIdealRating}
            style={{
              position: 'absolute',
              bottom: 50,
              right: 50
            }}
            upper>
            {buttonText}
          </PrimaryButton>
        </GradientWrapper>
      )
    }
    return null
  }
}



const customStyles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'transparent',
    marginTop: 30,
    marginRight: 20,
  },
  finishedButton: {
    minWidth: 130,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 35,
  },
  finishedText: {
    marginHorizontal: 0,
    ...semiBoldTextMixin(14, '#12124B')
  },
})
