import { Dimensions, Platform, PixelRatio } from 'react-native';

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
