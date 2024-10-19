import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {theme} from '../../styles/Theme';

const Header = ({
  title = '',
  backIcon = null,
  menuIcon = null,
  onBackPress = () => {},
  onMenuPress = () => {},
  hasShadow = false,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        shadowColor: hasShadow ? theme.colors.black : theme.colors.white,
      }}>
      <TouchableOpacity onPress={onBackPress}>{backIcon}</TouchableOpacity>

      {title && (
        <Text
          style={{
            ...theme.typography.Inter_16_Normal,
            color: theme.colors.black,
            textAlign: 'center',
          }}>
          {title}
        </Text>
      )}

      <TouchableOpacity style={{}} onPress={onMenuPress}>
        {menuIcon}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.18,
    shadowRadius: 3.84,
    elevation: 15,
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.sizes.basePadding,
    paddingVertical: 10,
    height: 100,
  },
});
Header.propTypes = {
  title: PropTypes.string,
  backIcon: PropTypes.element,
  menuIcon: PropTypes.element,
  onBackPress: PropTypes.func,
  onMenuPress: PropTypes.func,
};

export default Header;
