import { View } from 'react-native';

import { connectStyle } from 'src/tool-box/theme';
import { connectAnimation } from 'src/tool-box/animation';

const AnimatedRow = connectAnimation(View);
const Row = connectStyle('shoutem.ui.Row')(AnimatedRow);

export {
  Row,
};
