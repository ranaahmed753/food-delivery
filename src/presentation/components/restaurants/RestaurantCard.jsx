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
  height = theme.sizes.height * 0.27,
  imageContainerStyle = {width: 150, height: 100},
  onPress = () => {},
}) => {
  const restaurant = new Restaurant(item);
  return (
    <Pressable
      style={{
        height: height,
        width: width,
        ...styles.container,
      }}
      onPress={onPress}>
      <View
        style={{
          width: imageContainerStyle.width,
          ...styles.imageBackContainer,
        }}>
        <ImageBackground
          style={styles.imageBackground}
          imageStyle={{borderRadius: scale(12)}}
          source={restaurant?.image}
          resizeMode="cover">
          <View style={styles.imageBackInnerContainer}>
            <View style={styles.outlineHeartContainer}>
              <TouchableOpacity>
                <OutlineHeartIcon />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>

      <Text style={styles.branchName} numberOfLines={1}>
        {restaurant?.branchName}
      </Text>
      <View style={styles.rating_distance_container}>
        <View style={styles.ratingContainer}>
          <StarIcon />
          <Text style={styles.ratings}>{restaurant?.ratings}</Text>
        </View>
        <View style={styles.distanceContainer}>
          <LocationIcon color={theme.colors.primary} />
          <Text style={styles.distance}>{restaurant?.distance}m</Text>
        </View>
      </View>
      <Text style={styles.price}>$ 230</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: scale(12),
    padding: scale(8),
    shadowColor: theme.colors.primary,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.18,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: theme.colors.white,
  },
  imageBackContainer: {
    height: 100,
    borderRadius: scale(12),
    overflow: 'hidden',
  },
  imageBackground: {
    height: '100%',
    width: '100%',
    padding: scale(8),
    overflow: 'hidden',
  },
  imageBackInnerContainer: {
    width: '100%',
    position: 'absolute',
    right: 20,
    top: 5,
  },
  outlineHeartContainer: {
    width: scale(30),
    height: scale(30),
    borderRadius: 999,
    backgroundColor: theme.colors.white,
    padding: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  branchName: {
    ...theme.typography.Inter_16_Normal,
    color: theme.colors.black,
    marginTop: scale(8),
  },
  rating_distance_container: {
    marginTop: scale(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingContainer: {flexDirection: 'row', alignItems: 'center'},
  ratings: {
    ...theme.typography.Inter_14_Regular,
    color: theme.colors.black,
    marginLeft: scale(4),
  },
  distanceContainer: {flexDirection: 'row', alignItems: 'center'},
  distance: {
    ...theme.typography.Inter_14_Regular,
    color: theme.colors.black,
    marginLeft: scale(4),
  },
  price: {
    ...theme.typography.Inter_16_Normal,
    color: theme.colors.primary,
  },
});

export default RestaurantCard;
