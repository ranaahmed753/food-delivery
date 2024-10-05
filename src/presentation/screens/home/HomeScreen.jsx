import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import _ from 'lodash';
import ScreenWrapper from '../../components/wrapper/ScreenWrapper';
import {theme} from '../../styles/Theme';

const HomeScreen = () => {
  const restaurants = [];
  return (
    <ScreenWrapper
      hasHeader
      barStyle="light-content"
      statusBarColor={theme.colors.primary}>
      <View style={styles.container}>
        <FlatList
          data={restaurants}
          keyExtractor={(_, index) => index?.toString()}
          ListHeaderComponent={
            restaurants?.length > 0 && (
              <View style={styles.find_by_category_container}>
                <Text style={styles.find_by_category_text}>
                  Find by category
                </Text>
                <TouchableOpacity>
                  <Text style={styles.see_all_text}>See All</Text>
                </TouchableOpacity>
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
          renderItem={({item}) => null}
          contentContainerStyle={{flexGrow: 1}}
        />
      </View>
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
