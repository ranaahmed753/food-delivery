import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/wrapper/ScreenWrapper';
import {theme} from '../../styles/Theme';
import Assets from '../../../assets';
import {
  ClockIcon,
  DollarIcon,
  LeftArrowBackIcon,
  OutlineHeartIcon,
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
          showsVerticalScrollIndicator={false}>
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
      </View>
    </ScreenWrapper>
  );
};

export default RestaurantDetailScreen;
