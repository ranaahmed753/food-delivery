import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import _ from 'lodash';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import Assets from '../../../assets/index';
import {theme} from '../../styles/Theme';
import {scale} from '../../helper/Helper';
import {CircleArrowIcon, RightArrowIcon} from '../../components/svg/Icons';
import HorizontalCarousel from '../../components/carousel/HorizontalCarousel';

const OnboardingScreen = () => {
  const items = [
    {id: 1, image: Assets.burger_with_vegitable},
    {id: 2, image: Assets.burger_with_mutton},
    {id: 3, image: Assets.burger_with_meat},
  ];

  const renderItem = ({item}) => {
    return (
      <ImageBackground
        style={{
          height: theme.sizes.screenHeight,
          width: theme.sizes.screenWidth,
        }}
        source={item?.image}
      />
    );
  };
  return (
    <View style={styles.container}>
      <HorizontalCarousel
        data={items}
        renderItem={renderItem}
        renderPagination={({currentIndex, data, handleNext, handleSkip}) => (
          <View style={styles.infoContainer}>
            <View>
              <Text style={styles.we_serve_incomparable}>
                We serve incomparable delicacies
              </Text>
              <Text style={styles.all_the_best_restaurants}>
                All the best restaurants with their top menu waiting for you,
                they cant’t wait for your order!!
              </Text>
              <View style={styles.paginatorContainer}>
                {data?.map((_, paginatorIndex) => {
                  const animatedWidth = useSharedValue(
                    paginatorIndex === currentIndex ? 50 : 30,
                  );
                  const animatedBackgroundColor = useSharedValue(
                    paginatorIndex === currentIndex
                      ? theme.colors.white
                      : theme.colors.gray,
                  );

                  if (paginatorIndex === currentIndex) {
                    animatedWidth.value = withTiming(70, {duration: 300});
                    animatedBackgroundColor.value = withTiming(
                      theme.colors.white,
                      {duration: 300},
                    );
                  } else {
                    animatedWidth.value = withTiming(30, {duration: 300});
                    animatedBackgroundColor.value = withTiming(
                      theme.colors.gray,
                      {duration: 300},
                    );
                  }

                  const animatedStyle = useAnimatedStyle(() => {
                    return {
                      width: animatedWidth.value,
                      backgroundColor: animatedBackgroundColor.value,
                      height: 8,
                      borderRadius: 999,
                      marginHorizontal: 3,
                    };
                  });
                  return (
                    <Animated.View key={paginatorIndex} style={animatedStyle} />
                  );
                })}
              </View>
            </View>
            {currentIndex < data?.length - 1 && (
              <View style={styles.skip_next_btn_container}>
                <TouchableOpacity onPress={handleSkip}>
                  {currentIndex < data?.length - 1 && (
                    <Text style={styles.skipText}>Skip</Text>
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={handleNext}>
                  <Text style={styles.nextText}>Next</Text>
                  <RightArrowIcon />
                </TouchableOpacity>
              </View>
            )}

            {currentIndex === data?.length - 1 && (
              <View style={styles.circleArrowIconContainer}>
                <TouchableOpacity>
                  <CircleArrowIcon height={50} width={50} />
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  infoContainer: {
    position: 'absolute',
    top: '45.94%',
    bottom: '4.8%',
    height: theme.sizes.height * 0.4,
    width: theme.sizes.width * 0.8,
    backgroundColor: theme.colors.primary,
    zIndex: 999,
    borderRadius: 48,
    padding: theme.sizes.basePadding,
    justifyContent: 'space-between',
  },
  we_serve_incomparable: {
    ...theme.typography.Inter_28_Bold,
    color: theme.colors.white,
    textAlign: 'center',
  },
  all_the_best_restaurants: {
    ...theme.typography.Inter_14_Regular,
    textAlign: 'center',
    color: theme.colors.white,
    marginTop: scale(20),
  },
  skip_next_btn_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skipText: {
    ...theme.typography.Inter_14_Regular,
    color: theme.colors.white,
  },
  nextText: {
    ...theme.typography.Inter_14_Regular,
    color: theme.colors.white,
  },
  paginatorContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'center',
  },
  circleArrowIconContainer: {flexDirection: 'row', justifyContent: 'center'},
});

export default OnboardingScreen;
