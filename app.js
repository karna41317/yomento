/**
 * Created by Karan on 2017-11-02.
 */
import React from 'react'
import { View, Text, AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import Login from './src_native/Authentication'
import Intro from './src_native/Intro/Intro'
import Home from './src_native/Home/Home'
import Feedback from './src_native/Feedback'
import Channel from './src_native/Channels/Channel'
import OverView from './src_native/Overview'
import Settings from './src_native/Settings'
import Profile from './src_native/Profile'
import ChannelGrid from './src_native/Channels/ChannelGrid'
import Calender from './src_native/Calender/Calender'
import Widget from './src_native/Widgets/Widgets'
import Comments from './src_native/Comments'
import Timeline from './src_native/Timeline'
import DetailNews from './src_native/Home/DetailNews'
import Register from './src_native/Authentication/Registration'
import DrawerComponent from './src_native/Navigator/DrawerContent'
import store from './src_native/redux/store'
import lazyLoad from './src_native/lazyExample'
import flatList from './src_native/FlatListExample'
import Store from './src/store'
import { DrawerNavigator, TabNavigator, StackNavigator } from 'react-navigation'

class MainApp extends React.Component {
  render () {
    const App = TabNavigator({
      INTRO: {screen: Intro},
      LOGIN: {screen: Login},
      REGISTER: {screen: Register},
      Drawer: {
        screen: DrawerNavigator({
          NEWS: {
            screen: StackNavigator({
              Home: {
                screen: Home,
              },
              DetailNews: {
                screen: DetailNews,
                navigationOptions: {
                  header: null,
                },
              },
            }),
          },
          SETTINGS: {screen: Settings},
          CALENDER: {screen: Calender},
          CHANNEL: {screen: ChannelGrid},
          PROFILE: {screen: Profile},
          TIMELINE: {screen: Timeline},
          WIDGETS: {screen: Widget},
          OVERVIEW: {screen: OverView},
          FEEDBACK: {screen: Feedback},
          LAZYLOAD: {screen: lazyLoad},
          FLATLIST: {screen: flatList},
        }, {
          contentComponent: DrawerComponent,
        }),
      },
    }, {
      navigationOptions: {
        tabBarVisible: false,
      },
    })

    return (
      <Provider store={store} >
        <App/>
      </Provider>
    )
  }

}

AppRegistry.registerComponent('yemonto', () => MainApp)
