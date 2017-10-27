import { View } from 'react-native';

import { connectStyle } from 'src/tool-box/theme';
import { connectAnimation } from 'src/tool-box/animation';

const AnimatedDivider = connectAnimation(View);
const Divider = connectStyle('shoutem.ui.Divider')(AnimatedDivider);

export {
  Divider,
};
