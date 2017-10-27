import { View } from 'react-native';

import { connectStyle } from 'src/tool-box/theme';
import { connectAnimation } from 'src/tool-box/animation';

const AnimatedCard = connectAnimation(View);
const Card = connectStyle('shoutem.ui.Card')(AnimatedCard);

export {
  Card,
};
