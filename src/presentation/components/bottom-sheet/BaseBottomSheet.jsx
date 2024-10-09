import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BottomSheet, {
  useBottomSheetSpringConfigs,
  BottomSheetBackdrop,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {theme} from '../../styles/Theme';
import {moderateScale} from '../../helper/Helper';
import {useBottomSheet} from '../../context/BottomSheetContext';

const BaseBottomSheet = ({children, hasInset = false}) => {
  const {setBottomSheetRef} = useBottomSheet();
  const {bottom} = useSafeAreaInsets();
  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 300,
  });
  const renderBackdrop = React.useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        style={[props.style]}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.6}
        pressBehavior="close"
      />
    ),
    [],
  );

  return (
    <BottomSheetModalProvider>
      <BottomSheet
        index={-1}
        ref={ref => setBottomSheetRef(ref)}
        animationConfigs={animationConfigs}
        enableDynamicSizing
        maxDynamicContentSize={theme.sizes.screenHeight - moderateScale(100)}
        backdropComponent={renderBackdrop}
        enableHandlePanningGesture
        enablePanDownToClose
        bottomInset={hasInset ? moderateScale(bottom - 10) : 0}>
        <BottomSheetScrollView
          contentContainerStyle={{
            paddingHorizontal: moderateScale(10),
            paddingTop: moderateScale(10),
            paddingBottom: hasInset ? moderateScale(15) : moderateScale(10),
          }}>
          {children}
        </BottomSheetScrollView>
      </BottomSheet>
    </BottomSheetModalProvider>
  );
};

export default BaseBottomSheet;
