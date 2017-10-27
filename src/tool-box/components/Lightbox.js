import { default as Lightbox } from 'react-native-lightbox';

import { connectStyle } from 'src/tool-box/theme';
import { connectAnimation } from 'src/tool-box/animation';

const AnimatedLightbox = connectAnimation(Lightbox);
const StyledLightbox = connectStyle('shoutem.ui.Lightbox')(AnimatedLightbox);

export {
  StyledLightbox as Lightbox,
};
