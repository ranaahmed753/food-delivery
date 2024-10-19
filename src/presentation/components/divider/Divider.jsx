import {View, Text} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({height = 1, width = 1, color = ''}) => {
  return (
    <View style={{height: height, width: width, backgroundColor: color}} />
  );
};
Divider.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
};
export default Divider;
