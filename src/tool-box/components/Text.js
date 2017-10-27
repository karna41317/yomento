import React, { Component } from 'react';
import { Text as RNText } from 'react-native';

import { connectStyle } from 'src/tool-box/theme';
import { connectAnimation } from 'src/tool-box/animation';

class Text extends Component {
  render() {
    return (
      <RNText {...this.props} />
    );
  }
}

Text.propTypes = {
  ...RNText.propTypes,
};

const AnimatedText = connectAnimation(Text);
const StyledText = connectStyle('shoutem.ui.Text')(AnimatedText);
const Heading = connectStyle('shoutem.ui.Heading')(AnimatedText);
const Title = connectStyle('shoutem.ui.Title')(AnimatedText);
const Subtitle = connectStyle('shoutem.ui.Subtitle')(AnimatedText);
const Caption = connectStyle('shoutem.ui.Caption')(AnimatedText);

export {
  StyledText as Text,
  Heading,
  Title,
  Subtitle,
  Caption,
};
