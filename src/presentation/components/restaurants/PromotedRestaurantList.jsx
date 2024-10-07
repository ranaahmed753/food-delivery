import {View, Text, FlatList} from 'react-native';
import React from 'react';
import _ from 'lodash';
import RestaurantCard from './RestaurantCard';

const PromotedRestaurantList = ({restaurants = []}) => {
  const renderItem = ({item}) => {
    return <RestaurantCard item={item} />;
  };
  return (
    <FlatList
      data={restaurants}
      keyExtractor={(_, index) => index?.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      contentContainerStyle={{columnGap: 15, padding: 10}}
    />
  );
};

export default PromotedRestaurantList;
