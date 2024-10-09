// BottomSheetContext.js
import React, {createContext, useRef, useContext, useCallback} from 'react';

const BottomSheetContext = createContext(null);

export const useBottomSheet = () => {
  return useContext(BottomSheetContext);
};

export const BottomSheetProvider = ({children}) => {
  const bottomSheetRef = useRef(null);
  const setBottomSheetRef = useCallback(ref => {
    bottomSheetRef.current = ref;
  }, []);
  const openBottomSheet = useCallback(() => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.expand();
    }
  }, []);
  const closeBottomSheet = useCallback(() => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.close();
    }
  }, []);

  return (
    <BottomSheetContext.Provider
      value={{
        bottomSheetRef,
        setBottomSheetRef,
        openBottomSheet,
        closeBottomSheet,
      }}>
      {children}
    </BottomSheetContext.Provider>
  );
};
