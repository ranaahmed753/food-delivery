import {View, Text} from 'react-native';
import React from 'react';
import {theme} from '../../styles/Theme';

const PaymentSummary = () => {
  return (
    <View
      style={{
        borderRadius: 16,
        padding: 12,
        borderColor: theme.colors.gray,
        borderWidth: 1,
        width: theme.sizes.width * 0.9,
        alignSelf: 'center',
      }}>
      <Text
        style={{
          ...theme.typography.Inter_16_Normal,
          color: theme.colors.black,
        }}>
        Payment Summary
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 8,
        }}>
        <Text
          style={{
            ...theme.typography.Inter_14_Regular,
            fontWeight: 500,
            color: theme.colors.mithril,
          }}>
          Total Items(3)
        </Text>
        <Text
          style={{
            ...theme.typography.Inter_14_Regular,
            fontWeight: 500,
            color: theme.colors.black,
          }}>
          $4800
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 8,
        }}>
        <Text
          style={{
            ...theme.typography.Inter_14_Regular,
            fontWeight: 500,
            color: theme.colors.mithril,
          }}>
          Delivery Fee
        </Text>
        <Text
          style={{
            ...theme.typography.Inter_14_Regular,
            fontWeight: 500,
            color: theme.colors.black,
          }}>
          Free
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 8,
        }}>
        <Text
          style={{
            ...theme.typography.Inter_14_Regular,
            fontWeight: 500,
            color: theme.colors.mithril,
          }}>
          Discount
        </Text>
        <Text
          style={{
            ...theme.typography.Inter_14_Regular,
            fontWeight: 500,
            color: theme.colors.primary,
          }}>
          -$1200
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 8,
        }}>
        <Text
          style={{
            ...theme.typography.Inter_14_Regular,
            fontWeight: 500,
            color: theme.colors.mithril,
          }}>
          Total Items(3)
        </Text>
        <Text
          style={{
            ...theme.typography.Inter_14_Regular,
            fontWeight: 500,
            color: theme.colors.black,
          }}>
          $4800
        </Text>
      </View>
    </View>
  );
};

export default PaymentSummary;
