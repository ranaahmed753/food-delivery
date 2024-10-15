import {Dimensions, Platform} from 'react-native';
import {moderateScale} from '../helper/Helper';
const {width, height} = Dimensions.get('window');
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');
export const theme = {
  colors: {
    white: '#ffffff',
    primary: '#FE8C00',
    gray: '#C2C2C2',
    black: '#101010',
    sunCrete: '#FE8C000A',
    whiteEdgar: '#EDEDED',
  },
  typography: {
    Inter_14_Regular: {
      fontFamily: 'Inter',
      fontSize: 14,
      lineHeight: 20,
    },
    Inter_16_Normal: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontSize: 16,
      lineHeight: 24,
    },
    Inter_18_Regular: {
      fontFamily: 'Inter_18pt-Regular',
      fontSize: 18,
    },
    Inter_18_Semibold: {
      fontFamily: 'Inter_18pt-Semibold',
      fontSize: 18,
    },
    Inter_18_Bold: {
      fontFamily: 'Inter_18pt-Bold',
      fontSize: 18,
    },
    Inter_24_Regular: {
      fontFamily: 'Inter_24pt-Regular',
      fontSize: 24,
    },
    Inter_24_Semibold: {
      fontFamily: 'Inter_24pt-Semibold',
      fontSize: 24,
    },
    Inter_24_Bold: {
      fontFamily: 'Inter_24pt-Bold',
      fontSize: 24,
    },
    Inter_28_Regular: {
      fontFamily: 'Inter_28pt-Regular',
      fontSize: 28,
    },
    Inter_28_Semibold: {
      fontFamily: 'Inter_24pt-Semibold',
      fontSize: 28,
    },
    Inter_28_Bold: {
      fontFamily: 'Inter_24pt-Bold',
      fontSize: 28,
    },
    Inter_32_Regular: {
      fontFamily: 'Inter_32pt-Regular',
      fontSize: 32,
      lineHeight: 40,
    },
  },
  sizes: {
    tiny: 4,
    base: 8,
    radius: 12,
    five: 5,
    padding: 24,
    XX_SM: 2,
    X_SM: 4,
    S_SM: 6,
    SM: 8,
    S_MD: 10,
    MD: 12,
    LG: 16,
    S_LG: 18,
    X_LG: 20,
    XX_LG: 24,
    XXX_LG: 32,
    width,
    height,
    screenWidth,
    screenHeight,
    '100_P': '100%',
    basePadding: moderateScale(15),
  },
};
