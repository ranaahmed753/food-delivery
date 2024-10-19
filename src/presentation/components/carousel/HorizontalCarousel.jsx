import React, {useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';

const HorizontalCarousel = ({data, renderItem, renderPagination}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const onViewableItemsChanged = ({viewableItems}) => {
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
    if (currentIndex < data.length - 1) {
      flatListRef.current.scrollToIndex({index: currentIndex + 1});
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSkip = () => {
    if (currentIndex < data.length - 1) {
      flatListRef.current.scrollToIndex({index: data?.length - 1});
      setCurrentIndex(data?.length - 1);
    }
  };

  return (
    <View style={{alignItems: 'center'}}>
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(_, index) => index?.toString()}
        renderItem={({item, index}) => renderItem({item, index, currentIndex})}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      {renderPagination &&
        renderPagination({currentIndex, data, handleNext, handleSkip})}
    </View>
  );
};

HorizontalCarousel.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  renderPagination: PropTypes.func,
};

export default HorizontalCarousel;
