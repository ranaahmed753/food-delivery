import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale} from '../../helper/Helper';
import {theme} from '../../styles/Theme';
import {MasterCardSvg, PaymentGatewaySvg} from '../svg/Icons';

const CreditCardItem = ({cardName, cardNumber, cardType}) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: scale(16),
        borderColor: theme.colors.whiteEdgar,
        padding: scale(16),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        alignItems: 'center',
      }}>
      <View>
        <PaymentGatewaySvg />
      </View>
      <View>
        <Text
          style={{
            ...theme.typography.Inter_14_Regular,
            color: theme.colors.black,
          }}>
          MasterCard
        </Text>
        <Text
          style={{
            ...theme.typography.Inter_14_Regular,
            color: theme.colors.mithril,
          }}>
          **************1234567
        </Text>
      </View>
      <View>
        <MasterCardSvg />
      </View>
    </TouchableOpacity>
  );
};

export default CreditCardItem;
