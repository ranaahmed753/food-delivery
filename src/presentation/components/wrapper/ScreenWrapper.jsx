import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '../../styles/Theme';
import {scale} from '../../helper/Helper';
import {
  ArrowDownIcon,
  LocationIcon,
  RoundedNotificationIcon,
  RoundedSearchIcon,
} from '../svg/Icons';
import {useBottomSheet} from '../../context/BottomSheetContext';

const ScreenWrapper = ({
  children,
  hasHeader = false,
  statusBarColor,
  barStyle,
  fullScreen,
}) => {
  const insets = useSafeAreaInsets();
  const {openBottomSheet} = useBottomSheet();
  const fullScreenContainerStyle = fullScreen
    ? styles.fullScreenContainer
    : {flex: 1, paddingTop: insets?.top, paddingBottom: insets?.bottom};
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={statusBarColor}
        translucent={true}
        barStyle={barStyle}
        animated={true}
      />
      {hasHeader ? (
        <View style={styles.hasHeaderContainer}>
          <View style={styles.homeLayoutContainer}>
            <View style={styles.location_and_notification_container}>
              <View>
                <View style={styles.yourLocationContainer}>
                  <Text style={styles.yourLocation}>Your Location</Text>
                  <TouchableOpacity
                    style={styles.arrowDownTouch}
                    onPress={openBottomSheet}>
                    <ArrowDownIcon />
                  </TouchableOpacity>
                </View>
                <View style={styles.locationcontainer}>
                  <LocationIcon />
                  <Text style={styles.location}>New York City</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.serachIconTouch}>
                  <RoundedSearchIcon />
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificationIconTouch}>
                  <RoundedNotificationIcon />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.provide_the_best_food_for_you}>
              Provide the best food for you
            </Text>
          </View>
          {children}
        </View>
      ) : (
        <View style={fullScreenContainerStyle}>{children}</View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: theme.colors.white},
  fullScreenContainer: {flex: 1, paddingTop: 0, paddingBottom: 0},
  homeLayoutContainer: {
    backgroundColor: theme.colors.primary,
    padding: theme.sizes.basePadding,
  },
  provide_the_best_food_for_you: {
    ...theme.typography.Inter_32_Regular,
    color: theme.colors.white,
    marginTop: scale(24),
  },
  location: {
    ...theme.typography.Inter_14_Regular,
    color: theme.colors.white,
    marginLeft: 2,
  },
  serachIconTouch: {
    height: scale(40),
    width: scale(40),
    borderRadius: 999,
  },
  notificationIconTouch: {
    height: scale(40),
    width: scale(40),
    borderRadius: 999,
    marginLeft: 16,
  },
  locationcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(9),
  },
  arrowDownTouch: {
    marginLeft: 2,
    height: scale(16),
    width: scale(16),
  },
  yourLocation: {
    ...theme.typography.Inter_14_Regular,
    color: theme.colors.white,
    marginLeft: 2,
  },
  yourLocationContainer: {flexDirection: 'row', alignItems: 'center'},
  hasHeaderContainer: {flex: 1, backgroundColor: theme.colors.white},
  location_and_notification_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: scale(20),
  },
});

export default ScreenWrapper;
