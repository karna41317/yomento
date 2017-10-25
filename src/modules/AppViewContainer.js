import {connect} from 'react-redux';
import AppView from './AppView';

export default connect(
  state => {
    return {
      isReady: state.session.isReady
    }
  }
)(AppView);
