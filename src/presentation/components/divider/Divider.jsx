import {View, Text} from 'react-native';
import React from 'react';

const Divider = ({height = 1, width = 1, color = ''}) => {
  return (
    <View style={{height: height, width: width, backgroundColor: color}} />
  );
};

export default Divider;
