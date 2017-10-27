/**
 * Created by Karan on 2017-10-27.
 */

import { Theme } from 'src/tool-box/theme';
import getThemeStyle from './getThemeStyle';

function setDefaultThemeStyle() {
  const theme = getThemeStyle();
  Theme.setDefaultThemeStyle(theme);
}

export {
  setDefaultThemeStyle,
};
