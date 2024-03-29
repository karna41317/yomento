import React, {PropTypes, Component} from 'react';
import {View, StyleSheet, StatusBar, ActivityIndicator} from 'react-native';
import NavigatorViewContainer from './navigator/NavigatorViewContainer';
import * as snapshotUtil from '../utils/snapshot';
import * as SessionStateActions from '../modules/session/SessionState';
import store from '../redux/store';
import DeveloperMenu from '../components/DeveloperMenu';
import LinearGradient from 'react-native-linear-gradient';

class AppView extends Component {
  static displayName = 'AppView';

  static propTypes = {
    isReady: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    snapshotUtil.resetSnapshot()
      .then(snapshot => {
        const {dispatch} = this.props;

        if (snapshot) {
          dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot));
        } else {
          dispatch(SessionStateActions.initializeSessionState());
        }

        store.subscribe(() => {
          snapshotUtil.saveSnapshot(store.getState());
        });
      });
  }

  render() {
    if (!this.props.isReady) {
      return (
        <View style={{flex: 1}}>
          <ActivityIndicator style={styles.centered} />
        </View>
      );
    }

    return (
      <LinearGradient colors={['#0B0B48', '#0F0E4E', '#0F0F55', '#111059', '#17166D', '#181776', '#1D1C80', '#1E1D85']} style={{flex: 1}}>
        <StatusBar backgroundColor='#0B0B48' barStyle="light-content"/>
        <NavigatorViewContainer />
        {__DEV__ && <DeveloperMenu />}
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignSelf: 'center'
  }
});

export default AppView;
