import { View } from 'react-native';

import { connectStyle } from 'src/tool-box/theme';
import { connectAnimation } from 'src/tool-box/animation';

const AnimatedTile = connectAnimation(View);
const Tile = connectStyle('shoutem.ui.Tile')(AnimatedTile);

export {
  Tile,
};
