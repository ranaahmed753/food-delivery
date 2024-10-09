import {View} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './src/presentation/navigation';
import {BottomSheetProvider} from './src/presentation/context/BottomSheetContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <BottomSheetProvider>
          <RootNavigator />
        </BottomSheetProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
