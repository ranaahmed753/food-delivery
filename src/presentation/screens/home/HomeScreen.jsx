import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import _ from 'lodash';
import ScreenWrapper from '../../components/wrapper/ScreenWrapper';
import {theme} from '../../styles/Theme';
import Assets from '../../../assets/index';
import {scale} from '../../helper/Helper';
import RestaurantCategoryList from '../../components/home/RestaurantCategoryList';
import PromotedRestaurantList from '../../components/restaurants/PromotedRestaurantList';
import PopularRestaurantList from '../../components/restaurants/PopularRestaurantList';
import RestaurantCard from '../../components/restaurants/RestaurantCard';
import BaseBottomSheet from '../../components/bottom-sheet/BaseBottomSheet';
import {routeName} from '../../navigation/routeName';

const HomeScreen = ({navigation}) => {
  const restaurants = [
    {
      branchId: 1,
      branchName: 'Ordinary Burgers',
      image: Assets.burger_with_mutton,
      ratings: '4.9',
      isFavourite: false,
      location: {lat: '', long: ''},
      distance: '100',
      price: '120',
    },
    {
      branchId: 2,
      branchName: 'Burger with meat',
      image: Assets.burger_with_mutton,
      ratings: '4.5',
      isFavourite: false,
      location: {lat: '', long: ''},
      distance: '1000',
      price: '1200',
    },
  ];
  const categoryList = [
    {id: 1, title: 'Burger', icon: Assets.burger_small},
    {id: 2, title: 'Sandwich', icon: Assets.sandwich},
    {id: 3, title: 'Pizza', icon: Assets.pizza},
  ];
  const restaurantData = {
    popularRestaurants: [
      {
        branchId: 1,
        branchName: 'Ordinary Burgers',
        image: Assets.burger_with_mutton,
        ratings: '4.9',
        isFavourite: false,
        location: {lat: '', long: ''},
        distance: '100',
        price: '120',
      },
      {
        branchId: 2,
        branchName: 'Burger with meat',
        image: Assets.burger_with_mutton,
        ratings: '4.5',
        isFavourite: false,
        location: {lat: '', long: ''},
        distance: '1000',
        price: '1200',
      },
    ],
    promotedRestaurants: [
      {
        branchId: 1,
        branchName: 'Ordinary Burgers',
        image: Assets.burger_with_mutton,
        ratings: '4.9',
        isFavourite: false,
        location: {lat: '', long: ''},
        distance: '100',
        price: '120',
      },
      {
        branchId: 2,
        branchName: 'Burger with meat',
        image: Assets.burger_with_mutton,
        ratings: '4.5',
        isFavourite: false,
        location: {lat: '', long: ''},
        distance: '1000',
        price: '1200',
      },
      {
        branchId: 2,
        branchName: 'Burger with meat',
        image: Assets.burger_with_mutton,
        ratings: '4.5',
        isFavourite: false,
        location: {lat: '', long: ''},
        distance: '1000',
        price: '1200',
      },
    ],
    allBranch: [
      {
        branchId: 1,
        branchName: 'Ordinary Burgers',
        image: Assets.burger_with_mutton,
        ratings: '4.9',
        isFavourite: false,
        location: {lat: '', long: ''},
        distance: '100',
        price: '120',
      },
      {
        branchId: 2,
        branchName: 'Burger with meat',
        image: Assets.burger_with_mutton,
        ratings: '4.5',
        isFavourite: false,
        location: {lat: '', long: ''},
        distance: '1000',
        price: '1200',
      },
    ],
  };
  const renderItem = ({item}) => {
    return (
      <RestaurantCard
        item={item}
        width={theme.sizes.screenWidth * 0.9}
        imageContainerStyle={{width: theme.sizes.screenWidth * 0.9}}
        onPress={() => navigation.navigate(routeName.RestaurantDetail)}
        hasFavourite
      />
    );
  };
  return (
    <ScreenWrapper
      hasHeader
      barStyle="light-content"
      statusBarColor={theme.colors.primary}>
      <View style={styles.container}>
        <FlatList
          data={restaurants}
          keyExtractor={(_, index) => index?.toString()}
          bounces
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            restaurants?.length > 0 && (
              <View>
                <View style={styles.find_by_category_container}>
                  <Text style={styles.find_by_category_text}>
                    Find by category
                  </Text>
                  <TouchableOpacity>
                    <Text style={styles.see_all_text}>See All</Text>
                  </TouchableOpacity>
                </View>
                <View style={{marginTop: scale(16)}}>
                  <RestaurantCategoryList categoryList={categoryList} />
                </View>
                <View style={{marginTop: scale(10)}}>
                  <PromotedRestaurantList
                    restaurants={restaurantData?.promotedRestaurants}
                  />
                </View>
                <View style={{marginTop: scale(10)}}>
                  <PopularRestaurantList
                    restaurants={restaurantData?.popularRestaurants}
                  />
                </View>
              </View>
            )
          }
          ListEmptyComponent={
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>No restaurants found....</Text>
            </View>
          }
          renderItem={renderItem}
          contentContainerStyle={{rowGap: 10, flexGrow: 1}}
          ListFooterComponent={<View style={{paddingBottom: 100}}></View>}
        />
      </View>
      <BaseBottomSheet>
        <View>
          <Text>Hellohbdhdsfhcfhschgshgcfsdhgcfhgds</Text>
          <Text>Hellohbdhdsfhcfhschgshgcfsdhgcfhgds</Text>
          <Text>Hellohbdhdsfhcfhschgshgcfsdhgcfhgds</Text>
          <Text>Hellohbdhdsfhcfhschgshgcfsdhgcfhgds</Text>
          <Text>Hellohbdhdsfhcfhschgshgcfsdhgcfhgds</Text>
          <Text>Hellohbdhdsfhcfhschgshgcfsdhgcfhgds</Text>
          <Text>Hellohbdhdsfhcfhschgshgcfsdhgcfhgds</Text>
          <Text>Hellohbdhdsfhcfhschgshgcfsdhgcfhgds</Text>
          <Text>Hellohbdhdsfhcfhschgshgcfsdhgcfhgds</Text>
          <Text>Hellohbdhdsfhcfhschgshgcfsdhgcfhgds</Text>
          <Text>Hellohbdhdsfhcfhschgshgcfsdhgcfhgds</Text>
        </View>
      </BaseBottomSheet>
    </ScreenWrapper>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, padding: theme.sizes.basePadding},
  find_by_category_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  find_by_category_text: {
    ...theme.typography.Inter_16_Normal,
    color: theme.colors.black,
  },
  see_all_text: {
    ...theme.typography.Inter_14_Regular,
    color: theme.colors.primary,
  },
});

export default HomeScreen;
