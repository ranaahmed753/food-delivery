import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {EmptyCartSvg} from '../svg/Icons';
import {theme} from '../../styles/Theme';

const EmptyCart = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <EmptyCartSvg />
      <Text
        style={{
          ...theme.typography.Inter_24_Bold,
          color: theme.colors.black,
          marginTop: 56,
        }}>
        Ouch! Hungry
      </Text>
      <Text
        style={{
          ...theme.typography.Inter_16_Normal,
          color: theme.colors.mithril,
          marginTop: 16,
          textAlign: 'center',
        }}>
        Seems like you have not ordered any food yet
      </Text>
      <TouchableOpacity
        style={{
          padding: 16,
          borderRadius: 999,
          backgroundColor: theme.colors.primary,
          alignItems: 'center',
          width: theme.sizes.width * 0.9,
          alignSelf: 'center',
          marginTop: 40,
        }}>
        <Text
          style={{
            ...theme.typography.Inter_14_Regular,
            color: theme.colors.white,
          }}>
          Find Foods
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyCart;
