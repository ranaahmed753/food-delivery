import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import _ from 'lodash';
import Assets from '../../../assets/index';
import {theme} from '../../styles/Theme';
import {scale} from '../../helper/Helper';
import {CircleArrowIcon, RightArrowIcon} from '../../components/svg/Icons';

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef();
  const items = [
    {id: 1, image: Assets.burger_with_vegitable},
    {id: 2, image: Assets.burger_with_mutton},
    {id: 3, image: Assets.burger_with_meat},
  ];
  const onViewableItemsChanged = ({viewableItems}) => {
    console.log(viewableItems);
    if (viewableItems?.length > 0) {
      setCurrentIndex(viewableItems[0]?.index);
    }
  };
  const viewabilityConfigCallbackPairs = useRef([
    {
      onViewableItemsChanged,
      viewabilityConfig: {
        minimumViewTime: 100,
        viewAreaCoveragePercentThreshold: 50,
      },
    },
  ]);
  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      flatListRef.current.scrollToIndex({index: currentIndex + 1});
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSkip = () => {
    if (currentIndex < items.length - 1) {
      flatListRef.current.scrollToIndex({index: items?.length - 1});
      setCurrentIndex(items?.length - 1);
    }
  };
  const renderItem = ({item}) => {
    return (
      <ImageBackground
        style={{
          height: theme.sizes.screenHeight,
          width: theme.sizes.screenWidth,
        }}
        source={item?.image}></ImageBackground>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={(_, index) => index?.toString()}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.we_serve_incomparable}>
            We serve incomparable delicacies
          </Text>
          <Text style={styles.all_the_best_restaurants}>
            All the best restaurants with their top menu waiting for you, they
            cant’t wait for your order!!
          </Text>
          <View style={styles.paginatorContainer}>
            {items?.map((_, index) => (
              <View
                key={index}
                style={{
                  width: index === currentIndex ? 50 : 20,
                  height: 10,
                  backgroundColor:
                    index === currentIndex
                      ? theme.colors.white
                      : theme.colors.gray,
                  borderRadius: 999,
                  marginRight: 3,
                }}
              />
            ))}
          </View>
        </View>
        {currentIndex < items?.length - 1 && (
          <View style={styles.skip_next_btn_container}>
            <TouchableOpacity onPress={handleSkip}>
              {currentIndex < items?.length - 1 && (
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

        {currentIndex === items?.length - 1 && (
          <View style={styles.circleArrowIconContainer}>
            <TouchableOpacity>
              <CircleArrowIcon height={50} width={50} />
            </TouchableOpacity>
          </View>
        )}
      </View>
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
