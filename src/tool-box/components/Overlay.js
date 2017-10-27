import { View } from 'react-native';

import { connectStyle } from 'src/tool-box/theme';
import { connectAnimation } from 'src/tool-box/animation';

const AnimatedOverlay = connectAnimation(View);
const Overlay = connectStyle('shoutem.ui.Overlay')(AnimatedOverlay);

export {
  Overlay,
};
