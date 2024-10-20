import {
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/wrapper/ScreenWrapper';
import Header from '../../components/header/Header';
import {
  CircularMenuIcon,
  OfferIcon,
  OutlineBackIcon,
} from '../../components/svg/Icons';
import {theme} from '../../styles/Theme';
import {scale} from '../../helper/Helper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CartItem from '../../components/cart/CartItem';
import Spacer from '../../components/spacer/Spacer';
import PaymentSummary from '../../components/cart/PaymentSummary';
import EmptyCart from '../../components/cart/EmptyCart';

const CartScreen = () => {
  const cartItems = [
    {id: 1, name: 'Burger with meat', price: '$1200', isChecked: true},
    {id: 2, name: 'Ordinary burgers', price: '$1560', isChecked: true},
    {id: 3, name: 'Ordinary burgers', price: '$1560', isChecked: true},
    {id: 4, name: 'Ordinary burgers', price: '$1560', isChecked: true},
  ];
  return (
    <ScreenWrapper fullScreen statusBarColor="transparent">
      <Header
        backIcon={<OutlineBackIcon />}
        title="My Cart"
        menuIcon={<CircularMenuIcon />}
      />
      <View style={{flex: 1}}>
        {cartItems?.length > 0 ? (
          <ScrollView
            contentContainerStyle={{paddingBottom: 50}}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={false} onRefresh={() => {}} />
            }>
            <View
              style={{
                marginTop: scale(16),
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: theme.sizes.basePadding,
                alignItems: 'flex-start',
              }}>
              <View>
                <Text
                  style={{
                    ...theme.typography.Inter_14_Regular,
                    color: theme.colors.mithril,
                    flexGrow: 0,
                  }}>
                  Delivery Location
                </Text>
                <Text
                  style={{
                    ...theme.typography.Inter_14_Regular,
                    color: theme.colors.black,
                    flexGrow: 0,
                  }}>
                  Home
                </Text>
              </View>
              <Pressable
                style={{
                  borderRadius: 999,
                  borderColor: theme.colors.primary,
                  borderWidth: 0.5,
                  paddingHorizontal: 8,
                  paddingVertical: 10,
                }}>
                <Text
                  style={{
                    ...theme.typography.Inter_14_Regular,
                    color: theme.colors.primary,
                    flexGrow: 0,
                  }}>
                  Change Location
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                marginTop: 24,
                borderRadius: 999,
                borderWidth: 0.5,
                borderColor: theme.colors.gray,
                marginHorizontal: theme.sizes.basePadding,
                alignItems: 'center',
                flexDirection: 'row',
                paddingHorizontal: 10,
              }}>
              <OfferIcon />
              <TextInput
                style={{flex: 1}}
                placeholder="Promo Code..."
                placeholderTextColor={theme.colors.gray}
              />
              <TouchableOpacity
                style={{
                  borderRadius: 999,
                  paddingHorizontal: 8,
                  paddingVertical: 8,
                  backgroundColor: theme.colors.primary,
                }}>
                <Text
                  style={{
                    ...theme.typography.Inter_14_Regular,
                    color: theme.colors.white,
                  }}>
                  Apply
                </Text>
              </TouchableOpacity>
            </View>
            {cartItems?.map((cartItem, index) => (
              <View key={index}>
                <Spacer height={24} />
                <CartItem item={cartItem} index={index} />
              </View>
            ))}
            <Spacer height={40} />
            <PaymentSummary />
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
                Order Now
              </Text>
            </TouchableOpacity>
          </ScrollView>
        ) : (
          <View style={{flex: 1, justifyContent: 'center'}}>
            <EmptyCart />
          </View>
        )}
      </View>
    </ScreenWrapper>
  );
};

export default CartScreen;
