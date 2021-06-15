import { Dimensions, Platform, PixelRatio } from 'react-native';

import { COLORS } from './colors';

const SCREEN_WIDTH = Dimensions.get('window').width;

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export const normalizeFontSize = size => {
  const newSize = size * scale;
  const roundedSize = Math.round(PixelRatio.roundToNearestPixel(newSize));
  if (Platform.OS === 'ios') {
    return roundedSize;
  }
  return roundedSize - 1;
};

export const getShadowStyle = elevation => {
  // https://ethercreative.github.io/react-native-shadow-generator/
  let style;
  if (elevation) {
    style = {
      elevation,
      shadowColor: COLORS.SHADOW.LIGHT,
      shadowOffset: { width: 0, height: 0.5 * elevation },
      shadowOpacity: 0.5,
      shadowRadius: 0.8 * elevation,
      margin: elevation // so that shadow appears
    };
  }
  return style;
};
