import React, {
  Component,
} from 'react';

import { connectStyle } from 'src/tool-box/theme';

import { View } from 'src/tool-box/components';
import { Spinner } from './Spinner';

/**
 * Renders a loading indicator (spinner) that fits into available space (container)
 */
class LoadingIndicator extends Component {
  render() {
    return (
      <View styleName="flexible vertical v-center">
        <View styleName="horizontal h-center">
          <Spinner />
        </View>
      </View>
    );
  }
}

const StyledLoadingIndicator = connectStyle('shoutem.ui.LoadingIndicator')(LoadingIndicator);

export {
  StyledLoadingIndicator as LoadingIndicator,
};
