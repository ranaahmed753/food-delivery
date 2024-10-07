import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native';
import React from 'react';
import {scale} from '../../helper/Helper';
import {theme} from '../../styles/Theme';
import {LocationIcon, OutlineHeartIcon, StarIcon} from '../svg/Icons';
import {Restaurant} from '../../../domain/models/Restaurant';

const RestaurantCard = ({
  item = {},
  width = 150,
  height = theme.sizes.height * 0.25,
  imageContainerStyle = {width: 150, height: 100},
  onPress = () => {},
}) => {
  const restaurant = new Restaurant(item);
  return (
    <Pressable
      style={{
        height: height,
        width: width,
        borderRadius: scale(12),
        padding: scale(8),
        shadowColor: theme.colors.primary,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.18,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: theme.colors.white,
      }}
      onPress={onPress}>
      <View
        style={{
          height: 100,
          width: imageContainerStyle.width,
          borderRadius: scale(12),
          overflow: 'hidden',
        }}>
        <ImageBackground
          style={{
            height: '100%',
            width: '100%',
            padding: scale(8),
            overflow: 'hidden',
          }}
          imageStyle={{borderRadius: scale(12)}}
          source={restaurant?.image}
          resizeMode="cover">
          <View
            style={{
              width: '100%',
              position: 'absolute',
              right: 20,
              top: 5,
            }}>
            <View
              style={{
                width: scale(30),
                height: scale(30),
                borderRadius: 999,
                backgroundColor: theme.colors.white,
                padding: scale(10),
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}>
              <TouchableOpacity>
                <OutlineHeartIcon />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>

      <Text
        style={{
          ...theme.typography.Inter_16_Normal,
          color: theme.colors.black,
          marginTop: scale(8),
        }}
        numberOfLines={1}>
        {restaurant?.branchName}
      </Text>
      <View
        style={{
          marginTop: scale(4),
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <StarIcon />
          <Text
            style={{
              ...theme.typography.Inter_14_Regular,
              color: theme.colors.black,
              marginLeft: scale(4),
            }}>
            {restaurant?.ratings}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <LocationIcon color={theme.colors.primary} />
          <Text
            style={{
              ...theme.typography.Inter_14_Regular,
              color: theme.colors.black,
              marginLeft: scale(4),
            }}>
            {restaurant?.distance}m
          </Text>
        </View>
      </View>
      <Text
        style={{
          ...theme.typography.Inter_16_Normal,
          color: theme.colors.primary,
        }}>
        $ 230
      </Text>
    </Pressable>
  );
};

export default RestaurantCard;
