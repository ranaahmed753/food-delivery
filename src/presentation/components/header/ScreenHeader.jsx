import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {theme} from '../../styles/Theme';

const ScreenHeader = ({renderLeft, renderMiddle, renderRight}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>{renderLeft && renderLeft()}</View>
      <View style={styles.middle}>{renderMiddle && renderMiddle()}</View>
      <View style={styles.right}>{renderRight && renderRight()}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.sizes.basePadding,
    paddingVertical: 10,
    height: 100,
  },
  left: {
    flex: 1,
    alignItems: 'flex-start',
  },
  middle: {
    flex: 2,
    alignItems: 'center',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default ScreenHeader;
