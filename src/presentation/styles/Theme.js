import {Dimensions, Platform} from 'react-native';
import {moderateScale} from '../helper/Helper';
const {width, height} = Dimensions.get('window');
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');
const theme = {
  colors: {
    white: 'ffffff',
    primary: 'FE8C00',
    gray: 'C2C2C2',
  },
  typography: {
    Inter_18_Regular: {
      fontFamily: 'Inter_18_Regular',
      fontSize: 18,
    },
    Inter_18_Semibold: {
      fontFamily: 'Inter_18_Semibold',
      fontSize: 18,
    },
    Inter_18_Bold: {
      fontFamily: 'Inter_18_Bold',
      fontSize: 18,
    },
    Inter_24_Regular: {
      fontFamily: 'Inter_24_Regular',
      fontSize: 24,
    },
    Inter_24_Semibold: {
      fontFamily: 'Inter_24_Semibold',
      fontSize: 24,
    },
    Inter_24_Bold: {
      fontFamily: 'Inter_24_Bold',
      fontSize: 24,
    },
    Inter_28_Regular: {
      fontFamily: 'Inter_28_Regular',
      fontSize: 28,
    },
    Inter_28_Semibold: {
      fontFamily: 'Inter_24_Semibold',
      fontSize: 28,
    },
    Inter_28_Bold: {
      fontFamily: 'Inter_24_Bold',
      fontSize: 28,
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
