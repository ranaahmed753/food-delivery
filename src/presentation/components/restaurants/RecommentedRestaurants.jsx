import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import _ from 'lodash';
import RestaurantCard from './RestaurantCard';
import {theme} from '../../styles/Theme';

const RecommentedRestaurants = ({restaurants = []}) => {
  const renderItem = ({item}) => {
    return <RestaurantCard item={item} />;
  };
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: theme.sizes.basePadding,
        }}>
        <Text
          style={{
            ...theme.typography.Inter_16_Normal,
            color: theme.colors.black,
          }}>
          Recomended For You
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              ...theme.typography.Inter_14_Regular,
              color: theme.colors.primary,
            }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={restaurants}
        keyExtractor={(_, index) => index?.toString()}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={<View style={{width: 10}} />}
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 20,
          paddingHorizontal: theme.sizes.basePadding,
        }}
      />
    </View>
  );
};

export default RecommentedRestaurants;
