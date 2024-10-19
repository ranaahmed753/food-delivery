import {View, Text} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const Spacer = ({height = 0, width = 0}) => {
  return <View style={{height: height, width: width}} />;
};
Spacer.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Spacer;
