import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Pressable,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/wrapper/ScreenWrapper';
import {theme} from '../../styles/Theme';
import Assets from '../../../assets';
import {
  CartIcon,
  ClockIcon,
  DollarIcon,
  LeftArrowBackIcon,
  MinusIcon,
  OutlineHeartIcon,
  PlusIcon,
  StarIcon,
} from '../../components/svg/Icons';
import Divider from '../../components/divider/Divider';
import Spacer from '../../components/spacer/Spacer';

const RestaurantDetailScreen = ({navigation}) => {
  return (
    <ScreenWrapper fullScreen statusBarColor="transparent">
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            padding: theme.sizes.basePadding,
          }}
          showsVerticalScrollIndicator={false}
          bounces
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={() => null} />
          }>
          <ImageBackground
            style={{
              height: 300,
              paddingVertical: theme.sizes.basePadding,
              paddingHorizontal: theme.sizes.basePadding,
              justifyContent: 'space-between',
            }}
            source={Assets.burger_full}
            resizeMode="cover"
            imageStyle={{borderRadius: 16}}>
            <View style={{flex: 1, justifyContent: 'space-between'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: theme.colors.white,
                    borderRadius: 999,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 40,
                    width: 40,
                  }}
                  onPress={() => navigation.goBack()}>
                  <LeftArrowBackIcon />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: theme.colors.white,
                    borderRadius: 999,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 40,
                    width: 40,
                  }}>
                  <OutlineHeartIcon />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginBottom: 10,
                }}>
                {/* Having slider three dots here */}
              </View>
            </View>
          </ImageBackground>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 16}}>
            <Text
              style={{
                ...theme.typography.Inter_24_Regular,
                color: theme.colors.black,
              }}>
              Burger With Meat 🍔
            </Text>
          </View>
          <Text
            style={{
              marginTop: 8,
              color: theme.colors.primary,
              ...theme.typography.Inter_18_Semibold,
            }}>
            $ 12,230
          </Text>
          <View
            style={{
              marginTop: 16,
              borderRadius: 8,
              backgroundColor: theme.colors.sunCrete,
              height: 39,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <DollarIcon />
              <Text
                style={{...theme.typography.Inter_14_Regular, marginLeft: 8}}>
                Free Delivery
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <ClockIcon />
              <Text
                style={{...theme.typography.Inter_14_Regular, marginLeft: 8}}>
                0-30
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <StarIcon />
              <Text
                style={{...theme.typography.Inter_14_Regular, marginLeft: 8}}>
                4.5
              </Text>
            </View>
          </View>
          <Spacer height={16} />
          <Divider
            height={1}
            width={theme.sizes.screenWidth * 0.9}
            color={theme.colors.whiteEdgar}
          />
          <Text
            style={{
              ...theme.typography.Inter_16_Normal,
              marginTop: 16,
              color: theme.colors.black,
            }}>
            Description
          </Text>
          <Text
            style={{
              marginTop: 8,
              ...theme.typography.Inter_14_Regular,
              textAlign: 'justify',
            }}>
            Burger With Meat is a typical food from our restaurant that is much
            in demand by many people, this is very recommended for you.
          </Text>
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            zIndex: 999,
            bottom: 0,
            width: theme.sizes.screenWidth,
            shadowColor: theme.colors.primary,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.18,
            shadowRadius: 3.84,
            elevation: 5,
            backgroundColor: theme.colors.white,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: theme.sizes.basePadding,
            paddingVertical: theme.sizes.basePadding,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              style={{
                borderRadius: 999,
                borderWidth: 1,
                borderColor: theme.colors.whiteEdgar,
                padding: 3,
              }}>
              <MinusIcon />
            </Pressable>
            <Spacer width={8} />
            <Text>3</Text>
            <Spacer width={8} />
            <Pressable
              style={{
                borderRadius: 999,
                borderWidth: 1,
                borderColor: theme.colors.whiteEdgar,
                padding: 3,
              }}>
              <PlusIcon />
            </Pressable>
          </View>
          <Spacer width={20} />
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 10,
              backgroundColor: theme.colors.primary,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 999,
              flexDirection: 'row',
            }}>
            <CartIcon />
            <Text
              style={{
                ...theme.typography.Inter_14_Regular,
                color: theme.colors.white,
                marginLeft: 5,
              }}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default RestaurantDetailScreen;
