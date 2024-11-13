import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/wrapper/ScreenWrapper';
import ScreenHeader from '../../components/header/ScreenHeader';
import {
  ExtraCardSvg,
  OutlineBackIcon,
  TrashIcon,
} from '../../components/svg/Icons';
import {theme} from '../../styles/Theme';
import {scale} from '../../helper/Helper';
import CreditCardItem from '../../components/credit-card/CreditCardItem';
import Spacer from '../../components/spacer/Spacer';

const ExtraCardScreen = () => {
  return (
    <ScreenWrapper fullScreen statusBarColor="transparent">
      <View style={{flex: 1}}>
        <ScreenHeader
          renderLeft={() => (
            <TouchableOpacity>
              <OutlineBackIcon />
            </TouchableOpacity>
          )}
          renderMiddle={() => (
            <Text
              style={{
                ...theme.typography.Inter_16_Normal,
                color: theme.colors.black,
              }}>
              Extra Card
            </Text>
          )}
          renderRight={() => (
            <TouchableOpacity>
              <TrashIcon />
            </TouchableOpacity>
          )}
        />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 50,
          }}
          refreshControl={
            <RefreshControl
              colors={[theme.colors.primary]}
              refreshing={false}
              onRefresh={() => {}}
            />
          }>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: scale(24),
            }}>
            <ExtraCardSvg />
          </View>
          <Text
            style={{
              marginTop: scale(24),
              paddingHorizontal: scale(theme.sizes.basePadding),
              ...theme.typography.Inter_16_Normal,
              color: theme.colors.black,
            }}>
            Credit Card
          </Text>
          <View style={{paddingHorizontal: theme.sizes.basePadding}}>
            {[...Array(4).keys()]?.map((item, index) => (
              <View key={index}>
                <Spacer height={scale(20)} />
                <CreditCardItem />
              </View>
            ))}
          </View>
          <TouchableOpacity
            style={{
              padding: 16,
              borderRadius: 999,
              backgroundColor: theme.colors.primary,
              alignItems: 'center',
              width: theme.sizes.width * 0.9,
              alignSelf: 'center',
              marginTop: 24,
            }}>
            <Text
              style={{
                ...theme.typography.Inter_14_Regular,
                color: theme.colors.white,
              }}>
              Add New Card
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default ExtraCardScreen;
