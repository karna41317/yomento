import { View } from 'react-native';

import { connectStyle } from 'src/tool-box/theme';
import { connectAnimation } from 'src/tool-box/animation';

const AnimatedScreen = connectAnimation(View);
const Screen = connectStyle('shoutem.ui.Screen')(AnimatedScreen);

export {
  Screen,
};
