import {Image, TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import _ from 'lodash';
import {scale} from '../../helper/Helper';
import {theme} from '../../styles/Theme';

const RestaurantCategoryList = ({categoryList = []}) => {
  const [selectedCategory, setSelectedCategory] = useState(categoryList[0]);
  const handleCategorySelection = item => {
    setSelectedCategory(item);
  };
  return (
    <View style={styles.container}>
      {categoryList?.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.touch,
            {
              backgroundColor:
                category === selectedCategory
                  ? theme.colors.primary
                  : theme.colors.white,
            },
          ]}
          onPress={() => handleCategorySelection(category)}>
          <Image style={styles.image} source={category?.icon} />
          <Text
            style={[
              styles.title,
              {
                color:
                  category === selectedCategory
                    ? theme.colors.white
                    : theme.colors.black,
              },
            ]}>
            {category?.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    columnGap: 10,
  },
  touch: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(8),
    padding: scale(8),
    height: theme.sizes.screenHeight * 0.12,
    flex: 0.3,
    shadowColor: theme.colors.primary,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  image: {
    height: theme.sizes.screenHeight * 0.05,
    width: theme.sizes.screenWidth * 0.1,
  },
  title: {
    ...theme.typography.Inter_14_Regular,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default RestaurantCategoryList;
