import {View, Text} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({
  height = 1,
  width = 1,
  color = '',
  marginHorizontal = 0,
  marginVertical = 0,
  marginLeft = 0,
  marginRight = 0,
  marginTop = 0,
  marginBottom = 0,
}) => {
  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: color,
        marginHorizontal: marginHorizontal,
        marginVertical: marginVertical,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginBottom: marginBottom,
        alignSelf: 'center',
      }}
    />
  );
};
Divider.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
};
export default Divider;
