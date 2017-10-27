import React, { Component } from 'react';

import { connectStyle } from 'src/tool-box/theme';
import { connectAnimation } from 'src/tool-box/animation';

import { View } from 'src/tool-box/components';

class FormGroup extends Component {
  render() {
    return (
      <View {...this.props}>
        {this.props.children}
      </View>
    );
  }
}

FormGroup.propTypes = {
  ...View.propTypes
};

const AnimatedFormGroup = connectAnimation(FormGroup);
const StyledFormGroup = connectStyle('shoutem.ui.FormGroup')(AnimatedFormGroup);

export {
  StyledFormGroup as FormGroup,
};
